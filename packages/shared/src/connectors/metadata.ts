// If authBaseUrl or apiUrl both start with / it means a subdomain is likely needed
// If authBaseUrl is blank then it must be manually built in the client given the provider (meaning its not deterministic)

import { AuthStrategy, ProvidersConfig } from '../types';

export const CONNECTORS_METADATA: ProvidersConfig = {
    'crm': {
      'hubspot': {
        scopes: 'crm.objects.companies.read crm.objects.companies.write crm.objects.contacts.read crm.objects.contacts.write crm.objects.deals.read crm.objects.deals.write',
        urls: {
          docsUrl: 'https://developers.hubspot.com/docs/api/crm/understanding-the-crm',
          authBaseUrl: 'https://app-eu1.hubspot.com/oauth/authorize',
          apiUrl: 'https://api.hubapi.com/crm/v3',
          customPropertiesUrl: 'https://api.hubapi.com/properties/v1/contacts/properties',
        },
        logoPath: 'https://assets-global.website-files.com/6421a177cdeeaf3c6791b745/64d61202dd99e63d40d446f6_hubspot%20logo.png',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        authStrategy: AuthStrategy.oauth2
      },
      'attio': {
        scopes: 'record_permission:read',
        urls: {
          docsUrl: 'https://developers.attio.com/reference',
          authBaseUrl: 'https://app.attio.com/authorize',
          apiUrl: 'https://api.attio.com/v2',
          customPropertiesUrl: '/docs/standard-objects-people',
        },
        logoPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJWZsShi0G6mZ451MngEvQrmJ2JIGH-AF8JyFU-q-n3w&s',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        authStrategy: AuthStrategy.oauth2
      },
      'zoho': {
        scopes: 'ZohoCRM.modules.ALL',
        urls: {
          docsUrl: 'https://www.zoho.com/crm/developer/docs/api/v5/',
          authBaseUrl: '/oauth/v2/auth',
          apiUrl: '/crm/v3',
          customPropertiesUrl: '/settings/fields?module=Contact',
        },
        logoPath: 'https://assets-global.website-files.com/64f68d43d25e5962af5f82dd/64f68d43d25e5962af5f9812_64ad8bbe47c78358489b29fc_645e3ccf636a8d659f320e25_Group%25252012.png',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        authStrategy: AuthStrategy.oauth2
      },
      'pipedrive': {
        urls: {
          docsUrl: 'https://developers.pipedrive.com/docs/api/v1',
          authBaseUrl: 'https://oauth.pipedrive.com/oauth/authorize',
          apiUrl: 'https://api.pipedrive.com/v1',
          customPropertiesUrl: '/v1/personFields',
        },
        logoPath: 'https://asset.brandfetch.io/idZG_U1qqs/ideqSFbb2E.jpeg',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        authStrategy: AuthStrategy.oauth2
      },
      'freshsales': {
        scopes: '',
        urls: {
          docsUrl: '',
          authBaseUrl: '',
          apiUrl: '',
        },
        logoPath: 'https://play-lh.googleusercontent.com/Mwgb5c2sVHGHoDlthAYPnMGekEOzsvMR5zotxskrl0erKTW-xpZbuIXn7AEIqvrRHQ',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.oauth2
      },
      'zendesk': {
        scopes: 'read write',
        urls: {
          docsUrl: 'https://developer.zendesk.com/api-reference/sales-crm/introduction/',
          authBaseUrl: 'https://api.getbase.com/oauth2/authorize',
          apiUrl: 'https://api.getbase.com/v2',
          customPropertiesUrl: '/contact/custom_fields',
        },
        logoPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNKVceZGVM7PbARp_2bjdOICUxlpS5B29UYlurvh6Z2Q&s',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        authStrategy: AuthStrategy.oauth2,
      },
      'accelo': {
        scopes: '',
        urls: {
          docsUrl: 'https://api.accelo.com/docs/#introduction',
          authBaseUrl: '/oauth2/v0/authorize',
          apiUrl: '/api/v0',
        },
        logoPath: 'https://play-lh.googleusercontent.com/j63K2u8ZXukgPs8QPgyXfyoxuNBl_ST7gLx5DEFeczCTtM9e5JNpDjjBy32qLxFS7p0',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.oauth2
      },
      'active_campaign': {
        scopes: '',
        urls: {
          docsUrl: 'https://developers.activecampaign.com/reference/overview',
          apiUrl: '/api/3',
        },
        logoPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSymrBOaXpQab_5RPRZfiOXU7h9dfsduGZeCaZZw59xJA&s',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.api_key
      },
      'affinity': {
        urls: {
          docsUrl: 'https://api-docs.affinity.co/#getting-started',
          apiUrl: 'https://api.affinity.co',
        },
        logoPath: 'https://media.licdn.com/dms/image/C4D0BAQFOaK6KXEYj_w/company-logo_200_200/0/1630489791871/project_affinity_logo?e=2147483647&v=beta&t=u8j-1u3nO2m6vqgT170WJMCJyFSDiLYS_VguYOllNMI',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.api_key
      },
      'capsule': {
        scopes: '',
        urls: {
          docsUrl: 'https://developer.capsulecrm.com/',
          authBaseUrl: 'https://api.capsulecrm.com/oauth/authorise',
          apiUrl: 'https://api.capsulecrm.com/api/v2',
        },
        logoPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjS3qFlJJbQ802nGEV9w2GEgmnAIgJj6JJxe14cH6Wuw&s',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.oauth2,
        options: {
          local_redirect_uri_in_https: true
        }
      },
      'close': {
        urls: {
          docsUrl: 'https://developer.close.com/',
          authBaseUrl: 'https://app.close.com/oauth2/authorize',
          apiUrl: 'https://api.close.com/api/v1',
        },
        logoPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEH77yPBUkStmoc1ZtgJS4XeBmQiaq_Q1vgF5oerOGbg&s',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        authStrategy: AuthStrategy.oauth2
      },
      'copper': {
        scopes: '',
        urls: {
          docsUrl: 'https://developer.copper.com/index.html',
          authBaseUrl: 'https://app.copper.com/oauth/authorize',
          apiUrl: 'https://api.copper.com/developer_api/v1',
        },
        logoPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVa1YDciibzviRJxGovqH4gNgPxpZUAHEz36Bwnj54uQ&s',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.oauth2
      },
      'insightly': {
        scopes: '',
        urls: {
          docsUrl: 'https://api.insightly.com/v3.1/Help#!/Overview/Introduction',
          apiUrl: '/v3.1',
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.api_key,
      },
      'keap': {
        scopes: '',
        urls: {
          docsUrl: 'https://developer.infusionsoft.com/docs/restv2/',
          authBaseUrl: 'https://accounts.infusionsoft.com/app/oauth/authorize',
          apiUrl: 'https://api.infusionsoft.com/crm/rest/v2',
        },
        logoPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPYsWSMe9KVWgCIQ8fw-vBOnfTlZaSS6p_43ZhEIx51A&s',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.oauth2
      },
      'microsoft_dynamics_sales': {
        scopes: '',
        urls: {
          docsUrl: '',
          authBaseUrl: '',
          apiUrl: '',
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'nutshell': {
        scopes: '',
        urls: {
          docsUrl: 'https://developers.nutshell.com/',
          apiUrl: '/api/v1/json',
        },
        logoPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbCONyN9DCKfd4E8pzIdItl5VqPTEErpoEn9vHCgblRg&s',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.basic
      },
      'pipeliner': {
        scopes: '',
        urls: {
          docsUrl: 'https://pipeliner.stoplight.io/docs/api-docs',
          apiUrl: '',
        },
        logoPath: 'https://play-lh.googleusercontent.com/rK9Qv_w9C8Py_aLZdQQDobNdHWSG8KL4dj3cBBQLcimVu-ctxwujA4VE442lIpZ65AE',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.api_key
      },
      'salesflare': {
        scopes: '',
        urls: {
          docsUrl: 'https://api.salesflare.com/docs#section/Introduction/Getting-Started',
          apiUrl: 'https://api.salesflare.com',
        },
        logoPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTesqSVCSaCDrjedsKbepr14iJPySzUwrh7Fg9MhgKh9w&s',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.api_key
      },
      'salesforce': {
        scopes: '',
        urls: {
          docsUrl: '',
          authBaseUrl: '',
          apiUrl: '',
        },
        logoPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgL4FJb-GptGfxDDkWbIX2CjIM77t5q-d7eCFY6sGsHA&s',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.oauth2
      },
      'sugarcrm': {
        scopes: '',
        urls: {
          docsUrl: '',
          authBaseUrl: '',
          apiUrl: '',
        },
        logoPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQftNERc1ImBHm8MXXuWdhQiFYwW-dXNcogRL1UV8JyHFQGY2BbsbpwKvERwKRB39RH6zw&usqp=CAU',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.oauth2
      },
      'teamleader': {
        urls: {
          docsUrl: 'https://developer.teamleader.eu/#/introduction/ap-what?',
          authBaseUrl: 'https://focus.teamleader.eu/oauth2/authorize',
          apiUrl: 'https://api.focus.teamleader.eu',
        },
        logoPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE99rDOwXdRYGET0oeSCqK2kB02slJxZtTeBC79pb8IQ&s',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.oauth2
      },
      'teamwork': {
        urls: {
          docsUrl: 'https://apidocs.teamwork.com/guides/teamwork/getting-started-with-the-teamwork-com-api',
          authBaseUrl: 'https://www.teamwork.com/launchpad/login',
          apiUrl: '', // on purpose blank => everything is contained inside the accountUrl(subdomain)
        },
        logoPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr6gYDMNagMEicBb4dhKz4BC1fQs72In45QF7Ls6-moA&s',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.oauth2
      },
      // todo
      'vtiger': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: '',
        },
        logoPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcUYrYD8lnaFaDN93vwjHhksKJUG3rqlb1TCFC__oPBw&s',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.basic
      },
      // todo
      'twenty': {
        scopes: '',
        urls: {
          docsUrl: '',
          authBaseUrl: '',
          apiUrl: '',
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
    },
    'ticketing': {
      'front': {
        urls: {
          docsUrl: 'https://dev.frontapp.com/docs/welcome',
          authBaseUrl: 'https://app.frontapp.com/oauth/authorize',
          apiUrl: 'https://api2.frontapp.com',
        },
        logoPath: 'https://i.pinimg.com/originals/43/a2/43/43a24316bd773798c7638ad98521eb81.png',
        description: 'Sync & Create accounts, tickets, comments, attachments, contacts, tags, teams and users',
        authStrategy: AuthStrategy.oauth2,
        options: {
          local_redirect_uri_in_https: true
        }
      },
      'zendesk': {
        scopes: 'read write',
        urls: {
          docsUrl: 'https://developer.zendesk.com/api-reference/sales-crm/introduction/',
          authBaseUrl: '/oauth/authorizations/new',
          apiUrl: '/api/v2',
        },
        logoPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNKVceZGVM7PbARp_2bjdOICUxlpS5B29UYlurvh6Z2Q&s',
        description: 'Sync & Create accounts, tickets, comments, attachments, contacts, tags, teams and users',
        authStrategy: AuthStrategy.oauth2,
        realTimeWebhookMetadata: {
          method: 'API',
          events: [
            'ticketing.tickets.events',
            'ticketing.comments.events',
            'ticketing.tags.events',
            'ticketing.attachments.events',
            'ticketing.accounts.events',
            'ticketing.users.events',
            'ticketing.contacts.events',
          ]
        },
      },
      'gorgias': {
        scopes: 'write:all openid email profile offline',
        urls: {
          docsUrl: 'https://developers.gorgias.com/reference/introduction',
          apiUrl: '/api',
          authBaseUrl: `/connections/gorgias/oauth/install`,
        },
        logoPath: 'https://x5h8w2v3.rocketcdn.me/wp-content/uploads/2020/09/FS-AFFI-00660Gorgias.png',
        description: 'Sync & Create accounts, tickets, comments, attachments, contacts, tags, teams and users',
        authStrategy: AuthStrategy.oauth2
      },
      'jira': {
        scopes: 'read:jira-work manage:jira-project manage:jira-configuration read:jira-user write:jira-work manage:jira-webhook manage:jira-data-provider offline_access',
        urls: {
          docsUrl: '',
          apiUrl: '/rest/api/3',
          authBaseUrl: 'https://auth.atlassian.com/authorize',
        },
        logoPath: 'https://logowik.com/content/uploads/images/jira3124.jpg',
        description: 'Sync & Create accounts, tickets, comments, attachments, contacts, tags, teams and users',
        authStrategy: AuthStrategy.oauth2
      },
      'linear': {
        scopes: 'read,write',
        urls: {
          docsUrl: 'https://developers.linear.app/docs',
          apiUrl: 'https://api.linear.app/graphql',
          authBaseUrl: 'https://linear.app/oauth/authorize',
        },
        logoPath: 'https://asset.brandfetch.io/iduDa181eM/idYYbqOlKi.png',
        description: 'Sync & Create accounts, tickets, comments, attachments, contacts, tags, teams and users',
        active: false,
        authStrategy: AuthStrategy.oauth2
      },
      'gitlab': {
        scopes: 'api read_api read_user create_runner k8s_proxy read_repository write_repository sudo admin_mode read_service_ping openid profile email',
        urls: {
          docsUrl: 'https://docs.gitlab.com/ee/api/rest/#',
          apiUrl: 'https://gitlab.com/api/v4',
          authBaseUrl: 'https://gitlab.com/oauth/authorize',
        },
        logoPath: 'https://asset.brandfetch.io/idw382nG0m/idVn6myaqy.png',
        description: 'Sync & Create accounts, tickets, comments, attachments, contacts, tags, teams and users',
        active: true,
        authStrategy: AuthStrategy.oauth2
      },
      'clickup': {
        urls: {
          docsUrl: 'https://clickup.com/api/',
          apiUrl: 'https://api.clickup.com/v2',
          authBaseUrl: 'https://app.clickup.com/api',
        },
        logoPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRewJj9y5yKzSCf-qGgjmdLagEhxfnlZ7TUsvukbfZaIg&s',
        description: 'Sync & Create accounts, tickets, comments, attachments, contacts, tags, teams and users',
        active: false,
        authStrategy: AuthStrategy.oauth2
      },
      'github': {
        scopes: 'repo user project',
        urls: {
          docsUrl: 'https://docs.github.com/fr/rest',
          apiUrl: 'https://api.github.com',
          authBaseUrl: 'https://github.com/login/oauth/authorize',
        },
        logoPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqz0aID6B-InxK_03P7tCtqpXNXdawBcro67CyEE0I5g&s',
        description: 'Sync & Create accounts, tickets, comments, attachments, contacts, tags, teams and users',
        active: false,
        authStrategy: AuthStrategy.oauth2
      },
      'aha': {
        urls: {
          docsUrl: 'https://www.aha.io/api',
          apiUrl: '/api/v1',
          authBaseUrl: '/oauth/authorize',
        },
        logoPath: 'https://www.aha.io/aha-logo-2x.png',
        description: 'Sync & Create accounts, tickets, comments, attachments, contacts, tags, teams and users',
        active: false,
        authStrategy: AuthStrategy.oauth2,
        options: {
          local_redirect_uri_in_https: true
        }
      },
      'asana': {
        urls: {
          docsUrl: 'https://developers.asana.com/docs/overview',
          apiUrl: 'https://app.asana.com/api/1.0',
          authBaseUrl: 'https://app.asana.com/-/oauth_authorize',
        },
        logoPath: 'https://cdn.dribbble.com/users/2043665/screenshots/12080585/sunset_asana_logo_screenprint.png',
        description: 'Sync & Create accounts, tickets, comments, attachments, contacts, tags, teams and users',
        active: false,
        authStrategy: AuthStrategy.oauth2
      },
      'azure': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: '',
          authBaseUrl: '',
        },
        logoPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqz0aID6B-InxK_03P7tCtqpXNXdawBcro67CyEE0I5g&s',
        description: 'Sync & Create accounts, tickets, comments, attachments, contacts, tags, teams and users',
        active: false,
      },
      'basecamp': {
        scopes: '',
        urls: {
          docsUrl: 'https://github.com/basecamp/api/blob/master/sections/authentication.md',
          apiUrl: '',
          authBaseUrl: 'https://launchpad.37signals.com/authorization/new',
        }, 
        logoPath: 'https://asset.brandfetch.io/id7Kew_cLD/idx-Jcj2Qo.jpeg',
        description: 'Sync & Create accounts, tickets, comments, attachments, contacts, tags, teams and users',
        active: false,
        authStrategy: AuthStrategy.oauth2
      },
      'bitbucket': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: '',
          authBaseUrl: '',
        }, logoPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqz0aID6B-InxK_03P7tCtqpXNXdawBcro67CyEE0I5g&s',
        description: 'Sync & Create accounts, tickets, comments, attachments, contacts, tags, teams and users',
        active: false,
      },
      'dixa': {
        urls: {
          docsUrl: 'https://docs.dixa.io/docs/',
          apiUrl: 'https://dev.dixa.io/v1',
        },
        logoPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOxBDw6TkTaxR4EUGI_lNBLl4BCpd3AzXnr30cU_VEaB0jHFh__fFZJHXPB1t-451Eno8&usqp=CAU',
        description: 'Sync & Create accounts, tickets, comments, attachments, contacts, tags, teams and users',
        active: false,
        authStrategy: AuthStrategy.api_key
      },
      'freshdesk': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: '',
          authBaseUrl: '',
        },
        logoPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqz0aID6B-InxK_03P7tCtqpXNXdawBcro67CyEE0I5g&s',
        description: 'Sync & Create accounts, tickets, comments, attachments, contacts, tags, teams and users',
        active: false,
      },
      'freshservice': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: '',
          authBaseUrl: '',
        },
        logoPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqz0aID6B-InxK_03P7tCtqpXNXdawBcro67CyEE0I5g&s',
        description: 'Sync & Create accounts, tickets, comments, attachments, contacts, tags, teams and users',
        active: false,
      },
      'gladly': {
        scopes: '',
        urls: {
          docsUrl: 'https://developer.gladly.com/rest/',
          apiUrl: '/api/v1',
        },
        logoPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqz0aID6B-InxK_03P7tCtqpXNXdawBcro67CyEE0I5g&s',
        description: 'Sync & Create accounts, tickets, comments, attachments, contacts, tags, teams and users',
        active: false,
        authStrategy: AuthStrategy.basic
      },
      // todo
      'height': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: '',
          authBaseUrl: '',
        },
        logoPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqz0aID6B-InxK_03P7tCtqpXNXdawBcro67CyEE0I5g&s',
        description: 'Sync & Create accounts, tickets, comments, attachments, contacts, tags, teams and users',
        active: false,
      },
      'helpscout': {
        urls: {
          docsUrl: 'https://developer.helpscout.com/docs-api/',
          apiUrl: 'https://docsapi.helpscout.net/v1',
        },
        logoPath: 'https://play-lh.googleusercontent.com/ejDdUZ3Ssup5cVeOdCknoc1BpQtU07f8gYy4VYRudfBatFsOvFuwYybhB_lpSi2rmr2j',
        description: 'Sync & Create accounts, tickets, comments, attachments, contacts, tags, teams and users',
        active: false,
        authStrategy: AuthStrategy.api_key
      },
      'hive': {
        scopes: '',
        urls: {
          docsUrl: 'https://developers.hive.com/reference/introduction',
          apiUrl: 'https://app.hive.com/api/v1',
        },
        logoPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqz0aID6B-InxK_03P7tCtqpXNXdawBcro67CyEE0I5g&s',
        description: 'Sync & Create accounts, tickets, comments, attachments, contacts, tags, teams and users',
        active: false,
        authStrategy: AuthStrategy.api_key
      },
      // todo
      'intercom': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: '',
        },
        logoPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqz0aID6B-InxK_03P7tCtqpXNXdawBcro67CyEE0I5g&s',
        description: 'Sync & Create accounts, tickets, comments, attachments, contacts, tags, teams and users',
        active: false,
      },
      // todo
      'ironclad': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: '',
        },
        logoPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqz0aID6B-InxK_03P7tCtqpXNXdawBcro67CyEE0I5g&s',
        description: 'Sync & Create accounts, tickets, comments, attachments, contacts, tags, teams and users',
        active: false,
        authStrategy: AuthStrategy.api_key
      },
      'kustomer': {
        scopes: '',
        urls: {
          docsUrl: 'https://developer.kustomer.com/kustomer-api-docs/reference/introduction',
          apiUrl: 'https://api.kustomerapp.com',
        },
        logoPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqz0aID6B-InxK_03P7tCtqpXNXdawBcro67CyEE0I5g&s',
        description: 'Sync & Create accounts, tickets, comments, attachments, contacts, tags, teams and users',
        active: false,
        authStrategy: AuthStrategy.api_key
      },
      // todo
      'pivotal_tracker': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: '',
        },
        logoPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqz0aID6B-InxK_03P7tCtqpXNXdawBcro67CyEE0I5g&s',
        description: 'Sync & Create accounts, tickets, comments, attachments, contacts, tags, teams and users',
        active: false,
      },
      // todo
      'rally': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: '',
        },
        logoPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqz0aID6B-InxK_03P7tCtqpXNXdawBcro67CyEE0I5g&s',
        description: 'Sync & Create accounts, tickets, comments, attachments, contacts, tags, teams and users',
        active: false,
      },
      'reamaze': {
        scopes: '',
        urls: {
          docsUrl: 'https://www.reamaze.com/api',
          apiUrl: '/api/v1',
        },
        logoPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqz0aID6B-InxK_03P7tCtqpXNXdawBcro67CyEE0I5g&s',
        description: 'Sync & Create accounts, tickets, comments, attachments, contacts, tags, teams and users',
        active: false,
        authStrategy: AuthStrategy.api_key
      },
      // todo
      'salesforce': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: '',
        },
        logoPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqz0aID6B-InxK_03P7tCtqpXNXdawBcro67CyEE0I5g&s',
        description: 'Sync & Create accounts, tickets, comments, attachments, contacts, tags, teams and users',
        active: false,
      },
      // todo
      'servicenow': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: '',
        },
        logoPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqz0aID6B-InxK_03P7tCtqpXNXdawBcro67CyEE0I5g&s',
        description: 'Sync & Create accounts, tickets, comments, attachments, contacts, tags, teams and users',
        active: false,
      },
      'shortcut': {
        scopes: '',
        urls: {
          docsUrl: 'https://developer.shortcut.com/api/rest/v3',
          apiUrl: 'https://api.app.shortcut.com',
        },
        logoPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqz0aID6B-InxK_03P7tCtqpXNXdawBcro67CyEE0I5g&s',
        description: 'Sync & Create accounts, tickets, comments, attachments, contacts, tags, teams and users',
        active: false,
        authStrategy: AuthStrategy.api_key
      },
      // todo
      'spotdraft': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: '',
        },
        logoPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqz0aID6B-InxK_03P7tCtqpXNXdawBcro67CyEE0I5g&s',
        description: 'Sync & Create accounts, tickets, comments, attachments, contacts, tags, teams and users',
        active: false,
      },
      // todo
      'teamwork': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: '',
        },
        logoPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqz0aID6B-InxK_03P7tCtqpXNXdawBcro67CyEE0I5g&s',
        description: 'Sync & Create accounts, tickets, comments, attachments, contacts, tags, teams and users',
        active: false,
      },
      // todo
      'trello': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: 'https://api.app.shortcut.com',
        },
        logoPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqz0aID6B-InxK_03P7tCtqpXNXdawBcro67CyEE0I5g&s',
        description: 'Sync & Create accounts, tickets, comments, attachments, contacts, tags, teams and users',
        active: false,
      },
      'wrike': {
        scopes: '',
        urls: {
          docsUrl: 'https://developers.wrike.com/overview/',
          apiUrl: '/api/v4',
          authBaseUrl: 'https://login.wrike.com/oauth2/authorize/v4',
        },
        logoPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqz0aID6B-InxK_03P7tCtqpXNXdawBcro67CyEE0I5g&s',
        description: 'Sync & Create accounts, tickets, comments, attachments, contacts, tags, teams and users',
        active: false,
        authStrategy: AuthStrategy.oauth2
      },
      'zoho_bugtracker': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: '',
        },
        logoPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqz0aID6B-InxK_03P7tCtqpXNXdawBcro67CyEE0I5g&s',
        description: 'Sync & Create accounts, tickets, comments, attachments, contacts, tags, teams and users',
        active: false,
      },
      'zoho_desk': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: '',
        },
        logoPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqz0aID6B-InxK_03P7tCtqpXNXdawBcro67CyEE0I5g&s',
        description: 'Sync & Create accounts, tickets, comments, attachments, contacts, tags, teams and users',
        active: false,
      },
    },
    'accounting': {
      'pennylane': {
        scopes: 'accounting+customer_invoices+supplier_invoices',
        urls: {
          docsUrl: 'https://pennylane.readme.io/docs/getting-started',
          apiUrl: 'https://app.pennylane.com/api/external/v1',
          authBaseUrl: 'https://app.pennylane.com/oauth/authorize',
        },
        logoPath: 'https://c.clc2l.com/t/P/e/Pennylane-U9Wdby.png',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: true,
        authStrategy: AuthStrategy.oauth2,
        options: {
          local_redirect_uri_in_https: true
        }
      },
      'freshbooks': {
        scopes: '', 
        urls: {
          docsUrl: 'https://www.freshbooks.com/api/start',
          apiUrl: 'https://api.freshbooks.com',
          authBaseUrl: 'https://auth.freshbooks.com/oauth/authorize',
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.oauth2,
        options: {
          local_redirect_uri_in_https: true
        }
      },
      // todo
      'clearbooks': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: '',
          authBaseUrl: '',
        },
        logoPath: 'https://s3-eu-west-1.amazonaws.com/clearbooks-marketing/media-centre/MediaCentre/clear-books/CMYK/icon/clear-books-icon-cmyk.png',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'freeagent': {
        urls: {
          docsUrl: 'https://dev.freeagent.com/docs/quick_start',
          apiUrl: 'https://api.freeagent.com/v2',
          authBaseUrl: 'https://api.freeagent.com/v2/approve_app',
        },
        logoPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU-fob0b9pBNQdm80usnYa2yWdagm3eeBDH-870vSmfg&s',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.oauth2
      },
      'sage': {
        scopes: 'full_access',
        urls: {
          docsUrl: 'https://developer.sage.com/accounting/reference/',
          apiUrl: 'https://api.accounting.sage.com/v3.1',
          authBaseUrl: 'https://www.sageone.com/oauth2/auth/central?filter=apiv3.1',
        },
        logoPath: 'https://zynk.com/wp-content/uploads/2018/02/new-sage-logo.png',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.oauth2
      },
      // todo
      'sage_intacct': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: '',
          authBaseUrl: '',
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      // todo
      'microsoft_dynamics': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: '',
          authBaseUrl: '',
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'moneybird': {
        urls: {
          docsUrl: 'https://developer.moneybird.com/',
          apiUrl: 'https://moneybird.com/api/v2',
          authBaseUrl: 'https://moneybird.com/oauth/authorize',
        },
        logoPath: 'https://play-lh.googleusercontent.com/xqHj2qyqNoC-lX3HGeR6VMjndoc931QiFX92RPnRm8ACDcGMoMR5JKj4wyvPe6ITY5s',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.oauth2
      },
      // todo
      'netsuite': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: '',
          authBaseUrl: '',
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'quickbooks': {
        scopes: 'com.intuit.quickbooks.accounting',
        urls: {
          docsUrl: 'https://developer.intuit.com/app/developer/qbo/docs/develop',
          apiUrl: 'https://quickbooks.api.intuit.com/v3',
          authBaseUrl: 'https://appcenter.intuit.com/connect/oauth2',
        },
        logoPath: 'https://i.ibb.co/hMhHt5G/quickbooks-app-tips.png',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.oauth2
      },
      // todo
      'workday': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: '',
          authBaseUrl: '',
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'wave_financial': {
        scopes: '',
        urls: {
          docsUrl: 'https://developer.waveapps.com/hc/en-us/articles/360019968212-API-Reference',
          apiUrl: 'https://gql.waveapps.com/graphql/public',
          authBaseUrl: 'https://api.waveapps.com/oauth2/authorize/',
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.oauth2
      },
      'xero': {
        // scopes: 'openid profile email accounting.transactions accounting.reports.read accounting.contacts accounting.attachments accounting.budgets.read',
        urls: {
          docsUrl: 'https://developer.xero.com/documentation/getting-started-guide/',
          apiUrl: 'https://api.xero.com/api.xro/2.0',
          authBaseUrl: 'https://login.xero.com/identity/connect/authorize',
        },
        logoPath: 'https://i.ibb.co/qpc2RQZ/xeroappicon.png',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false, 
        authStrategy: AuthStrategy.oauth2
      },
    },
    'marketingautomation': {
      'active_campaign': {
        scopes: '',
        urls: {
          docsUrl: 'https://developers.activecampaign.com/reference/overview',
          apiUrl: '/api/3'
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.api_key
      },
      // todo
      'customerio': {
        scopes: '',
        urls: {
          docsUrl: 'https://customer.io/docs/api/track/',
          apiUrl: 'https://track.customer.io/api/'
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'getresponse': {
        urls: {
          authBaseUrl: 'https://app.getresponse.com/oauth2_authorize.html',
          docsUrl: 'https://apidocs.getresponse.com/v3',
          apiUrl: 'https://api.getresponse.com/v3'
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.oauth2
      },
      // todo
      'hubspot_marketing_hub': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'keap': {
        scopes: '',
        urls: {
          authBaseUrl: 'https://accounts.infusionsoft.com/app/oauth/authorize',
          docsUrl: 'https://developer.infusionsoft.com/docs/rest/',
          apiUrl: 'https://api.infusionsoft.com/crm/rest/v1/account/profile'
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.oauth2
      },
      'klaviyo': {
        scopes: '',
        urls: {
          docsUrl: 'https://developers.klaviyo.com/en/reference/api_overview',
          apiUrl: 'https://a.klaviyo.com/api'
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.api_key
      },
      'mailchimp': {
        scopes: '',
        urls: {
          authBaseUrl: 'https://login.mailchimp.com/oauth2/authorize',
          docsUrl: 'https://mailchimp.com/developer/marketing/api/',
          apiUrl: '' // todo
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.oauth2
      },
      'messagebird': {
        scopes: '',
        urls: {
          docsUrl: 'https://developers.messagebird.com/api/',
          apiUrl: 'https://rest.messagebird.com'
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.api_key
      },
      'podium': {
        scopes: '',
        urls: {
          authBaseUrl: 'https://api.podium.com/oauth/authorize',
          docsUrl: 'https://docs.podium.com/reference/introduction',
          apiUrl: 'https://api.podium.com/v4'
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.oauth2
      },
      'sendgrid': {
        scopes: '',
        urls: {
          docsUrl: 'https://docs.sendgrid.com/for-developers/sending-email/api-getting-started',
          apiUrl: 'https://api.sendgrid.com/v3'
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.api_key
      },
      'brevo': {
        urls: { 
          docsUrl: 'https://developers.brevo.com/docs/getting-started',
          apiUrl: 'https://api.brevo.com/v3'
        },
        logoPath: 'https://sbp-plugin-images.s3.eu-west-1.amazonaws.com/technologies526_65670ec92e038_brevo300.jpg',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.api_key
      },
    },
    'ats': {
      // todo
      'applicantstack': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'ashby': {
        scopes: '',
        urls: {
          docsUrl: 'https://developers.ashbyhq.com',
          apiUrl: 'https://api.ashbyhq.com'
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.api_key
      },
      // todo
      'bamboohr': {
        scopes: '',
        urls: {
          docsUrl: 'https://documentation.bamboohr.com/docs/getting-started',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.api_key
      },
      'breezy': {
        scopes: '',
        urls: {
          docsUrl: 'https://developer.breezy.hr/reference/overview',
          apiUrl: 'https://api.breezy.hr/v3'
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.api_key
      },
      // todo
      'bullhorn': {
        scopes: '',
        urls: {
          docsUrl: 'https://bullhorn.github.io/rest-api-docs/',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'cats': {
        scopes: '',
        urls: {
          docsUrl: 'https://docs.catsone.com/api/v3/',
          apiUrl: 'https://api.catsone.com/v3'
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.api_key
      },
      'clayhr': {
        scopes: '',
        urls: {
          docsUrl: 'https://clayhr.readme.io/',
          apiUrl: '/rm/api/v3'
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.api_key
      },
      // todo
      'clockwork': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      // todo
      'comeet': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'cornerstone_talentlink': {
        scopes: '',
        urls: {
          docsUrl: 'https://developer.lumesse-talenthub.com/rest-api-developers-guide/1.21.33/index.html?page=rest-api&subpage=introduction',
          apiUrl: 'https://apiproxy.shared.lumessetalentlink.com/tlk/rest'
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.api_key
      },
      'engage_ats': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'eploy': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'fountain': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.api_key
      },
      'freshteam': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'greenhouse': {
        scopes: 'candidates.create candidates.view jobs.view',
        urls: {
          docsUrl: '',
          apiUrl: 'https://api.greenhouse.io/v1/partner',
          authBaseUrl: 'https://api.greenhouse.io/oauth/authorize'
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.oauth2
      },
      'greenhouse_job_boards': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.basic
      },
      'harbour_ats': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'homerun': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.api_key
      },
      'hrcloud': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'icims': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.oauth2
      },
      'infinite_brassring': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'jazzhr': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'jobadder': {
        scopes: 'offline_access read write',
        urls: {
          docsUrl: 'https://api.jobadder.com/v2/docs#section/Getting-Started/Authentication',
          apiUrl: '',
          authBaseUrl: 'https://id.jobadder.com/connect/authorize'
        },
        logoPath: 'https://images.saasworthy.com/jobadder_5399_logo_1586769331_xj0dn.jpg',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.oauth2
      },
      'jobscore': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'jobvite': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.oauth2
      },
      'lano': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'lever': {
        scopes: 'offline_access applications:read:admin opportunities:read:admin opportunities:write:admin',
        urls: {
          docsUrl: 'https://hire.lever.co/developer/documentation#introduction',
          apiUrl: 'https://api.lever.co/v1',
          authBaseUrl: 'https://auth.lever.co/authorize'
        },
        logoPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbR9XSB1lbZnYlLWyqMe5Px80ghtEOUqHeqw&s',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.oauth2
      },
      'occupop': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'oracle_fusion': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'oracle_taleo': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'personio_recruiting': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'pinpoint': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'polymer': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'recruiterflow': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'recruitive': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'sage_hr': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'sap_successfactors': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'smartrecruiters': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'talentlyft': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'talentreef': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'teamtailor': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'tellent': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'tribepad': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'ukg_pro_recruiting': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'workable': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'workday': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'zoho_recruit': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
    },
    'hris': {
      '7shifts': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'adp_workforce_now': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'alexishr': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'alliancehcm': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'altera_payroll': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'bamboohr': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'breathe': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.api_key
      },
      'ceridian_dayforce': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'charlie': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.basic

      },
      'charthop': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'clayhr': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'cyberark': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'deel': {
        scopes: 'contracts:read	contracts:write	invoice-adjustments:read invoice-adjustments:write accounting:read candidates:read candidates:write	Users:read Users:write tasks:read	tasks:write organizations:read organizations:write',
        urls: {
          docsUrl: 'https://developer.deel.com/docs/welcome#/',
          apiUrl: 'https://api.letsdeel.com/rest/v2',
          authBaseUrl: 'https://app.deel.com/oauth2/authorize'
        },
        logoPath: 'https://asset.brandfetch.io/id4NSNrRnG/idXzwlo3iL.jpeg',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.oauth2,
        options: {
          local_redirect_uri_in_https: true
        }
      },
      'rippling': {
        scopes: '',
        urls: {
          docsUrl: 'https://developer.rippling.com/docs/rippling-api/9rw6guf819r5f-introduction-for-customers',
          apiUrl: 'https://api.rippling.com/platform/api',
          authBaseUrl: 'https://app.rippling.com/apps/PLATFORM/{APPNAME}/authorize'
        },
        logoPath: 'https://avatars.githubusercontent.com/u/19614805?s=280&v=4',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.oauth2,
        options: {
          local_redirect_uri_in_https: true
        }
      },
      'employment_hero': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'factorial': {
        urls: {
          docsUrl: 'https://apidoc.factorialhr.com/docs/authentication-1',
          apiUrl: 'https://api.factorialhr.com/api/v1',
          authBaseUrl: 'https://api.factorialhr.com/oauth/authorize'
        },
        logoPath: 'https://pbs.twimg.com/profile_images/1449821710853808130/N2nL_8z3_400x400.jpg',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.oauth2
      },
      'freshteam': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'google_workspace': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'gusto': {
        urls: {
          docsUrl: 'https://docs.gusto.com/app-integrations/docs/introduction',
          apiUrl: 'https://api.gusto.com/v1',
          authBaseUrl: 'https://api.gusto-demo.com/oauth/authorize'
        },
        logoPath: 'https://cdn.runalloy.com/landing/uploads-new/Gusto_Logo_67ca008403.png',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: true,
        authStrategy: AuthStrategy.oauth2
      },
      'hibob': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'hrcloud': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'hrpartner': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'humaans': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.api_key
      },
      'humi': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'insperity_premier': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'active_campaign': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'intellli_hr': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.api_key
      },
      'iris_cascade': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'jumpcloud': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'justworks': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'kallidus': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'keka': {
        scopes: '',
        urls: {
          docsUrl: 'https://developers.keka.com/reference/getting-started-for-customers',
          apiUrl: '' // todo https://{company}.{environment}.com/api/v1
        },
        logoPath: 'https://play-lh.googleusercontent.com/OiG-QsKPm--v-16z225UtUND2IIbinlLrnBhSRch9kL_ruBCIh4GDA0sD_BnUPF93Ew',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.oauth2
      },
      'kenjo': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.api_key
      },
      'lano': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'lucca': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'microsoft_entra_id': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'namely': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'nmbrs': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'officient': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.oauth2
      },
      'okta': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'onelogin': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'oracle_hcm': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'oyster_hr': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'paycaptain': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'paychex': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'paycor': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'payfit': {
        scopes: '',
        urls: {
          docsUrl: 'https://developers.payfit.io/docs/cbb',
          apiUrl: 'https://partner-api.payfit.com',
          authBaseUrl: 'https://oauth.payfit.com/authorize'
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false, 
        authStrategy: AuthStrategy.oauth2
      },
      'paylocity': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: '',
          authBaseUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'people_hr': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'personio': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'pingone': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'proliant': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'remote': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'sage_hr': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'sap_successfactors': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'sesame': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'square_payroll': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'trinet': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'trinet_hr_platform': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'ukg_pro': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'ukg_pro_workforce': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'ukg_ready': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'workday': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
      'zoho_people': {
        scopes: '',
        urls: {
          docsUrl: '',
          apiUrl: ''
        },
        logoPath: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWAw573iaV74pXS9xOv997dRZtM',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
      },
    },
    'filestorage': {
      'googledrive': {
        scopes: 'https://www.googleapis.com/auth/drive',
        urls: {
          docsUrl: '',
          apiUrl: 'https://www.googleapis.com/drive/v2',
          authBaseUrl: 'https://accounts.google.com/o/oauth2/v2/auth'
        },
        logoPath: 'https://static-00.iconduck.com/assets.00/google-drive-icon-2048x2048-j5sa1hcp.png',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.oauth2,
      },
      'onedrive': {
        scopes: 'wl.basic onedrive.readwrite wl.offline_access',
        urls: {
          docsUrl: 'https://learn.microsoft.com/en-us/graph/api/overview?view=graph-rest-1.0',
          apiUrl: 'https://graph.microsoft.com/v1.0',
          authBaseUrl: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize'
        },
        logoPath: 'https://logowik.com/content/uploads/images/4964-microsoft-onedrive-new.jpg',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.oauth2,
      },
      'dropbox': {
        urls: {
          docsUrl: 'https://www.dropbox.com/developers/documentation/http/documentation',
          apiUrl: 'https://api.dropboxapi.com/2',
          authBaseUrl: 'https://www.dropbox.com/oauth2/authorize'
        },
        logoPath: 'https://cdn2.iconfinder.com/data/icons/metro-ui-dock/512/Dropbox.png',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.oauth2,
      },
      'sharepoint': {
        scopes: '',
        urls: {
          docsUrl: 'https://learn.microsoft.com/en-us/graph/api/overview?view=graph-rest-1.0',
          apiUrl: 'https://graph.microsoft.com/v1.0',
          authBaseUrl: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize'
        },
        logoPath: 'https://pnghq.com/wp-content/uploads/pnghq.com-microsoft-sharepoint-logo-9.png',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.oauth2,
      },
      'box': {
        scopes: '',
        urls: {
          docsUrl: 'https://developer.box.com/reference/',
          apiUrl: 'https://api.box.com',
          authBaseUrl: 'https://account.box.com/api/oauth2/authorize'
        },
        logoPath: 'https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/95b201e8-845a-4064-a9b2-a8eb49d19ca3.png?w=128&h=128&fit=max&dpr=3&auto=format&q=50',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.oauth2,
      },
    },
    'management': {
      'notion': {
        urls: {
          docsUrl: 'https://developers.notion.com/docs/getting-started',
          apiUrl: 'https://api.notion.com/v1',
          authBaseUrl: 'https://api.notion.com/v1/oauth/authorize'
        },
        logoPath: 'https://www.jordanharbinger.com/wp-content/uploads/2021/08/notion.png',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.oauth2,
      },
      'slack': {
        scopes: '&user_scope=channels:history',
        urls: {
          docsUrl: 'https://api.slack.com/apis',
          apiUrl: 'https://slack.com/api',
          authBaseUrl: 'https://slack.com/oauth/v2/authorize'
        },
        logoPath: 'https://assets-global.website-files.com/621c8d7ad9e04933c4e51ffb/65eba5ffa14998827c92cc01_slack-octothorpe.png',
        description: 'Sync & Create contacts, deals, companies, notes, engagements, stages, tasks and users',
        active: false,
        authStrategy: AuthStrategy.oauth2,
      },
    }
};
