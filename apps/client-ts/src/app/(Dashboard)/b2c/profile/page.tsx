'use client'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator"
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie';
import useProfileStore from "@/state/profileStore";
import useProjectStore from "@/state/projectStore"
import { useQueryClient } from '@tanstack/react-query';
import { useState } from "react";
import { toast } from "sonner";
import useChangePassword from "@/hooks/create/useChangePassword";
import { Badge } from "@/components/ui/badge";


const Profile = () => {
  const [copied, setCopied] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const { profile, setProfile } = useProfileStore();
  const { setIdProject } = useProjectStore();
  const { changePasswordPromise } = useChangePassword();
  const queryClient = useQueryClient();

  const router = useRouter();

  const handleCopy = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true);
      toast.success("Email copied", {
        action: {
          label: "Close",
          onClick: () => console.log("Close"),
        },
      })
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const onLogout = () => {
    router.push('/b2c/login')
    Cookies.remove("access_token")
    setProfile(null)
    setIdProject("")
    queryClient.clear()
  }

  const onChangePassword = () => {
    toast.promise(
      changePasswordPromise({
        id_user: profile?.id_user!,
        email: profile?.email!,
        old_password_hash: oldPassword,
        new_password_hash: newPassword
      }),
      {
        loading: 'Loading...',
        success: (data: any) => {
          setProfile(data.user);
          Cookies.set('access_token', data.access_token, { expires: 1 });
          router.replace("/connections");
          queryClient.setQueryData<any[]>(['users'], (oldQueryData = []) => {
            return [...oldQueryData, data];
          });
          return (
            <div className="flex flex-row items-center">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.49991 0.877045C3.84222 0.877045 0.877075 3.84219 0.877075 7.49988C0.877075 11.1575 3.84222 14.1227 7.49991 14.1227C11.1576 14.1227 14.1227 11.1575 14.1227 7.49988C14.1227 3.84219 11.1576 0.877045 7.49991 0.877045ZM1.82708 7.49988C1.82708 4.36686 4.36689 1.82704 7.49991 1.82704C10.6329 1.82704 13.1727 4.36686 13.1727 7.49988C13.1727 10.6329 10.6329 13.1727 7.49991 13.1727C4.36689 13.1727 1.82708 10.6329 1.82708 7.49988ZM10.1589 5.53774C10.3178 5.31191 10.2636 5.00001 10.0378 4.84109C9.81194 4.68217 9.50004 4.73642 9.34112 4.96225L6.51977 8.97154L5.35681 7.78706C5.16334 7.59002 4.84677 7.58711 4.64973 7.78058C4.45268 7.97404 4.44978 8.29061 4.64325 8.48765L6.22658 10.1003C6.33054 10.2062 6.47617 10.2604 6.62407 10.2483C6.77197 10.2363 6.90686 10.1591 6.99226 10.0377L10.1589 5.53774Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
              <div className="ml-2">
                Password for user
                <Badge variant="secondary" className="rounded-sm px-1 mx-2 font-normal">
                  {`${profile?.email}`}
                </Badge>
                has been updated successfully
              </div>
            </div>
          );
        },
        error: (err: any) => err.message || 'Error'
      });
  }

  return (
    <div className="p-10 flex flex-col gap-8 container mt-12">
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>
            <div className="flex items-center">
              {profile?.first_name} {profile?.last_name}
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h4 className="text-sm font-medium mb-2">Connected user</h4>

          <div className="flex space-x-2">
            <Input value={`${profile?.email}`} readOnly />
            <Button type="button" onClick={() => handleCopy(profile?.email!)}>
              {copied ? 'Copied!' : (
                <>
                  <p className="mr-1" >Copy</p>
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 2V1H10V2H5ZM4.75 0C4.33579 0 4 0.335786 4 0.75V1H3.5C2.67157 1 2 1.67157 2 2.5V12.5C2 13.3284 2.67157 14 3.5 14H11.5C12.3284 14 13 13.3284 13 12.5V2.5C13 1.67157 12.3284 1 11.5 1H11V0.75C11 0.335786 10.6642 0 10.25 0H4.75ZM11 2V2.25C11 2.66421 10.6642 3 10.25 3H4.75C4.33579 3 4 2.66421 4 2.25V2H3.5C3.22386 2 3 2.22386 3 2.5V12.5C3 12.7761 3.22386 13 3.5 13H11.5C11.7761 13 12 12.7761 12 12.5V2.5C12 2.22386 11.7761 2 11.5 2H11Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Change password</CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col gap-4">
          <Input type="password" value={oldPassword} onChange={(e) => {
            setOldPassword(e.target.value)
          }} placeholder="old password" />

          <Input type="password" value={newPassword} onChange={(e) => {
            setNewPassword(e.target.value)
          }} placeholder="new password" />

          <Button type="button" onClick={onChangePassword}>
            <p className="mr-1" >Save</p>
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <Button type="button" onClick={onLogout}>
            <p className="mr-1" >Logout</p>
          </Button>
        </CardHeader>
      </Card>
    </div>
  );
};

export default Profile;