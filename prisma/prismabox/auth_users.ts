import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const auth_usersPlain = t.Object(
  {
    instance_id: __nullable__(t.String()),
    id: t.String(),
    aud: __nullable__(t.String()),
    role: __nullable__(t.String()),
    email: __nullable__(t.String()),
    encrypted_password: __nullable__(t.String()),
    email_confirmed_at: __nullable__(t.Date()),
    invited_at: __nullable__(t.Date()),
    confirmation_token: __nullable__(t.String()),
    confirmation_sent_at: __nullable__(t.Date()),
    recovery_token: __nullable__(t.String()),
    recovery_sent_at: __nullable__(t.Date()),
    email_change_token_new: __nullable__(t.String()),
    email_change: __nullable__(t.String()),
    email_change_sent_at: __nullable__(t.Date()),
    last_sign_in_at: __nullable__(t.Date()),
    raw_app_meta_data: __nullable__(t.Any()),
    raw_user_meta_data: __nullable__(t.Any()),
    is_super_admin: __nullable__(t.Boolean()),
    created_at: __nullable__(t.Date()),
    updated_at: __nullable__(t.Date()),
    phone: __nullable__(t.String()),
    phone_confirmed_at: __nullable__(t.Date()),
    phone_change: __nullable__(t.String()),
    phone_change_token: __nullable__(t.String()),
    phone_change_sent_at: __nullable__(t.Date()),
    confirmed_at: __nullable__(t.Date()),
    email_change_token_current: __nullable__(t.String()),
    email_change_confirm_status: __nullable__(t.Integer()),
    banned_until: __nullable__(t.Date()),
    reauthentication_token: __nullable__(t.String()),
    reauthentication_sent_at: __nullable__(t.Date()),
    is_sso_user: t.Boolean(),
    deleted_at: __nullable__(t.Date()),
    is_anonymous: t.Boolean(),
  },
  {
    additionalProperties: false,
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
This model contains an expression index which requires additional setup for migrations. Visit https://pris.ly/d/expression-indexes for more info.`,
  },
);

export const auth_usersRelations = t.Object(
  {
    identities: t.Array(
      t.Object(
        {
          provider_id: t.String(),
          user_id: t.String(),
          identity_data: t.Any(),
          provider: t.String(),
          last_sign_in_at: __nullable__(t.Date()),
          created_at: __nullable__(t.Date()),
          updated_at: __nullable__(t.Date()),
          email: __nullable__(t.String()),
          id: t.String(),
        },
        {
          additionalProperties: false,
          description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
      { additionalProperties: false },
    ),
    mfa_factors: t.Array(
      t.Object(
        {
          id: t.String(),
          user_id: t.String(),
          friendly_name: __nullable__(t.String()),
          factor_type: t.Union(
            [t.Literal("totp"), t.Literal("webauthn"), t.Literal("phone")],
            { additionalProperties: false },
          ),
          status: t.Union([t.Literal("unverified"), t.Literal("verified")], {
            additionalProperties: false,
          }),
          created_at: t.Date(),
          updated_at: t.Date(),
          secret: __nullable__(t.String()),
          phone: __nullable__(t.String()),
          last_challenged_at: __nullable__(t.Date()),
          web_authn_credential: __nullable__(t.Any()),
          web_authn_aaguid: __nullable__(t.String()),
          last_webauthn_challenge_data: __nullable__(t.Any()),
        },
        {
          additionalProperties: false,
          description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
      { additionalProperties: false },
    ),
    oauth_authorizations: t.Array(
      t.Object(
        {
          id: t.String(),
          authorization_id: t.String(),
          client_id: t.String(),
          user_id: __nullable__(t.String()),
          redirect_uri: t.String(),
          scope: t.String(),
          state: __nullable__(t.String()),
          resource: __nullable__(t.String()),
          code_challenge: __nullable__(t.String()),
          code_challenge_method: __nullable__(
            t.Union([t.Literal("s256"), t.Literal("plain")], {
              additionalProperties: false,
            }),
          ),
          response_type: t.Union([t.Literal("code")], {
            additionalProperties: false,
          }),
          status: t.Union(
            [
              t.Literal("pending"),
              t.Literal("approved"),
              t.Literal("denied"),
              t.Literal("expired"),
            ],
            { additionalProperties: false },
          ),
          authorization_code: __nullable__(t.String()),
          created_at: t.Date(),
          expires_at: t.Date(),
          approved_at: __nullable__(t.Date()),
          nonce: __nullable__(t.String()),
        },
        {
          additionalProperties: false,
          description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
        },
      ),
      { additionalProperties: false },
    ),
    oauth_consents: t.Array(
      t.Object(
        {
          id: t.String(),
          user_id: t.String(),
          client_id: t.String(),
          scopes: t.String(),
          granted_at: t.Date(),
          revoked_at: __nullable__(t.Date()),
        },
        {
          additionalProperties: false,
          description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
        },
      ),
      { additionalProperties: false },
    ),
    one_time_tokens: t.Array(
      t.Object(
        {
          id: t.String(),
          user_id: t.String(),
          token_type: t.Union(
            [
              t.Literal("confirmation_token"),
              t.Literal("reauthentication_token"),
              t.Literal("recovery_token"),
              t.Literal("email_change_token_new"),
              t.Literal("email_change_token_current"),
              t.Literal("phone_change_token"),
            ],
            { additionalProperties: false },
          ),
          token_hash: t.String(),
          relates_to: t.String(),
          created_at: t.Date(),
          updated_at: t.Date(),
        },
        {
          additionalProperties: false,
          description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
      { additionalProperties: false },
    ),
    sessions: t.Array(
      t.Object(
        {
          id: t.String(),
          user_id: t.String(),
          created_at: __nullable__(t.Date()),
          updated_at: __nullable__(t.Date()),
          factor_id: __nullable__(t.String()),
          aal: __nullable__(
            t.Union([t.Literal("aal1"), t.Literal("aal2"), t.Literal("aal3")], {
              additionalProperties: false,
            }),
          ),
          not_after: __nullable__(t.Date()),
          refreshed_at: __nullable__(t.Date()),
          user_agent: __nullable__(t.String()),
          ip: __nullable__(t.String()),
          tag: __nullable__(t.String()),
          oauth_client_id: __nullable__(t.String()),
          refresh_token_hmac_key: __nullable__(t.String()),
          refresh_token_counter: __nullable__(t.Integer()),
          scopes: __nullable__(t.String()),
        },
        {
          additionalProperties: false,
          description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
      { additionalProperties: false },
    ),
    webauthn_challenges: t.Array(
      t.Object(
        {
          id: t.String(),
          user_id: __nullable__(t.String()),
          challenge_type: t.String(),
          session_data: t.Any(),
          created_at: t.Date(),
          expires_at: t.Date(),
        },
        {
          additionalProperties: false,
          description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
        },
      ),
      { additionalProperties: false },
    ),
    webauthn_credentials: t.Array(
      t.Object(
        {
          id: t.String(),
          user_id: t.String(),
          credential_id: t.Uint8Array(),
          public_key: t.Uint8Array(),
          attestation_type: t.String(),
          aaguid: __nullable__(t.String()),
          sign_count: t.Integer(),
          transports: t.Any(),
          backup_eligible: t.Boolean(),
          backed_up: t.Boolean(),
          friendly_name: t.String(),
          created_at: t.Date(),
          updated_at: t.Date(),
          last_used_at: __nullable__(t.Date()),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
    claim_requests: t.Array(
      t.Object(
        {
          id: t.String(),
          user_id: t.String(),
          invoice_no: t.String(),
          amount: t.Number(),
          invoice_date: __nullable__(t.Date()),
          note: __nullable__(t.String()),
          receipt_image_url: __nullable__(t.String()),
          status: t.String(),
          created_at: t.Date(),
          updated_at: t.Date(),
          log: __nullable__(t.Any()),
          updated_by: __nullable__(t.String()),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
    customer_group: t.Array(
      t.Object(
        {
          id: t.String(),
          name: t.String(),
          description: __nullable__(t.String()),
          color: t.String(),
          member_count: t.Integer(),
          created_at: t.Date(),
          updated_at: t.Date(),
          created_by: __nullable__(t.String()),
          group_type: t.String(),
          filter_criteria: __nullable__(t.Any()),
        },
        {
          additionalProperties: false,
          description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
      { additionalProperties: false },
    ),
    customer_requests: t.Array(
      t.Object(
        {
          id: t.Integer(),
          customeruser_id: __nullable__(t.String()),
          name: __nullable__(t.String()),
          tel: __nullable__(t.String()),
          company: __nullable__(t.String()),
          event_id: __nullable__(t.Integer()),
          request: __nullable__(t.String()),
          created_by: __nullable__(t.String()),
          created_at: t.Date(),
          assigned_users_id: __nullable__(t.String()),
          sopt_head_id: __nullable__(t.Integer()),
          assigned_users_ids: t.Array(t.String(), {
            additionalProperties: false,
          }),
          sopt_head_ids: t.Array(t.Integer(), { additionalProperties: false }),
          email: __nullable__(t.String()),
          has_data: __nullable__(t.Boolean()),
          is_active: t.Boolean(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
      { additionalProperties: false },
    ),
    customer_segment: t.Array(
      t.Object(
        {
          id: t.String(),
          name: t.String(),
          description: __nullable__(t.String()),
          conditions: t.Any(),
          member_count: t.Integer(),
          created_by: __nullable__(t.String()),
          created_at: t.Date(),
          updated_at: t.Date(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
      { additionalProperties: false },
    ),
    customeruser: __nullable__(
      t.Object(
        {
          id: t.String(),
          authid: __nullable__(t.String()),
          member_id: __nullable__(t.String()),
          created_at: t.Date(),
          prefix: __nullable__(t.String()),
          namesurname: __nullable__(t.String()),
          email: __nullable__(t.String()),
          tel: __nullable__(t.String()),
          pdpa_accepted: __nullable__(t.Boolean()),
          pdpa_accepted_at: __nullable__(t.Date()),
          pdpa_version: __nullable__(t.String()),
          gender: __nullable__(t.String()),
          birthday: __nullable__(t.Date()),
          home_address_line1: __nullable__(t.String()),
          home_address_line2: __nullable__(t.String()),
          home_sub_district: __nullable__(t.String()),
          home_district: __nullable__(t.String()),
          home_province: __nullable__(t.String()),
          home_postal_code: __nullable__(t.String()),
          w1_address_line1: __nullable__(t.String()),
          w1_address_line2: __nullable__(t.String()),
          w1_sub_district: __nullable__(t.String()),
          w1_district: __nullable__(t.String()),
          w1_province: __nullable__(t.String()),
          w1_postal_code: __nullable__(t.String()),
          position: __nullable__(t.String()),
          w1_name: __nullable__(t.String()),
          status: __nullable__(t.String()),
          note: __nullable__(t.String()),
          Preferred_Contact_Channel: __nullable__(t.String()),
          fcm_token: __nullable__(t.String()),
          avatar_url: __nullable__(t.String()),
          line_id: __nullable__(t.String()),
          is_online: __nullable__(t.Boolean()),
          last_online: __nullable__(t.String()),
          picprofile: __nullable__(t.String()),
          wtel: __nullable__(t.String()),
          gibthailink: __nullable__(t.Any()),
          biodesignlink: __nullable__(t.Any()),
          lableaderlink: __nullable__(t.Any()),
          aeclink: __nullable__(t.Any()),
          doctorcallink: __nullable__(t.Any()),
          miclink: __nullable__(t.Any()),
          log: __nullable__(t.String()),
          department: __nullable__(t.String()),
          knowform: __nullable__(t.String()),
          referred_by: __nullable__(t.String()),
          uninstalled_at: __nullable__(t.Date()),
          line_user_id: __nullable__(t.String()),
          facebook_psid: __nullable__(t.String()),
          source: __nullable__(t.String()),
          tel2: __nullable__(t.String()),
        },
        { additionalProperties: false },
      ),
    ),
    deliveries: t.Array(
      t.Object(
        {
          id: t.Integer(),
          event: t.String(),
          timestamp: t.Date(),
          source: __nullable__(t.String()),
          delivered_by: __nullable__(t.String()),
          note: __nullable__(t.String()),
          total_items: __nullable__(t.Integer()),
          total_quantity: __nullable__(t.Number()),
          order_count: __nullable__(t.Integer()),
          created_at: __nullable__(t.Date()),
          updated_at: __nullable__(t.Date()),
          customer_name: __nullable__(t.String()),
          customer_phone: __nullable__(t.String()),
          customer_address: __nullable__(t.String()),
          IO: __nullable__(t.String()),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
      { additionalProperties: false },
    ),
    dhl_shipments: t.Array(
      t.Object(
        {
          id: t.String(),
          created_at: t.Date(),
          created_by: __nullable__(t.String()),
          sx_no: t.String(),
          tracking_number: t.String(),
          consignee_name: t.String(),
          consignee_company: __nullable__(t.String()),
          consignee_address: __nullable__(t.String()),
          consignee_district: __nullable__(t.String()),
          consignee_city: __nullable__(t.String()),
          consignee_state: __nullable__(t.String()),
          consignee_postcode: __nullable__(t.String()),
          consignee_phone: __nullable__(t.String()),
          weight_kg: __nullable__(t.Number()),
          cod_amount: __nullable__(t.Number()),
          packing_items: t.Any(),
          pickup_account_id: __nullable__(t.String()),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
      { additionalProperties: false },
    ),
    noti_read_log: t.Array(
      t.Object(
        {
          id: t.Integer(),
          noti_id: t.Integer(),
          user_id: __nullable__(t.String()),
          platform: t.String(),
          event_type: t.String(),
          created_at: t.Date(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
      { additionalProperties: false },
    ),
    product_review_product_review_replied_byTousers: t.Array(
      t.Object(
        {
          id: t.String(),
          order_id: t.String(),
          product_id: t.Integer(),
          user_id: t.String(),
          rating: t.Integer(),
          comment: t.String(),
          created_at: t.Date(),
          status: t.String(),
          admin_reply: __nullable__(t.String()),
          replied_at: __nullable__(t.Date()),
          replied_by: __nullable__(t.String()),
          updated_at: t.Date(),
        },
        {
          additionalProperties: false,
          description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
      { additionalProperties: false },
    ),
    product_review_product_review_user_idTousers: t.Array(
      t.Object(
        {
          id: t.String(),
          order_id: t.String(),
          product_id: t.Integer(),
          user_id: t.String(),
          rating: t.Integer(),
          comment: t.String(),
          created_at: t.Date(),
          status: t.String(),
          admin_reply: __nullable__(t.String()),
          replied_at: __nullable__(t.Date()),
          replied_by: __nullable__(t.String()),
          updated_at: t.Date(),
        },
        {
          additionalProperties: false,
          description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
      { additionalProperties: false },
    ),
    user_favorites: t.Array(
      t.Object(
        {
          id: t.Integer(),
          user_id: t.String(),
          product_id: t.Integer(),
          created_at: __nullable__(t.Date()),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
      { additionalProperties: false },
    ),
    user_login_history: t.Array(
      t.Object(
        {
          id: t.String(),
          created_at: t.Date(),
          auth_id: __nullable__(t.String()),
          login_at: __nullable__(t.Date()),
          app_version: __nullable__(t.String()),
          build_number: __nullable__(t.String()),
          platform: __nullable__(t.String()),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
    users: __nullable__(
      t.Object(
        {
          id: t.String(),
          name: t.String(),
          avatar_url: __nullable__(t.String()),
          is_online: __nullable__(t.Boolean()),
          sharepoint_id: __nullable__(t.Integer()),
          person_id: __nullable__(t.String()),
          email: __nullable__(t.String()),
          line_id: __nullable__(t.String()),
          planetone_id: __nullable__(t.String()),
          tel: __nullable__(t.String()),
          position: __nullable__(t.String()),
          manager: __nullable__(t.String()),
          manager2: __nullable__(t.String()),
          address: __nullable__(t.String()),
          authid: __nullable__(t.String()),
          last_online: __nullable__(t.String()),
          fcm_token: __nullable__(t.String()),
          salesupport: __nullable__(t.String()),
          role: __nullable__(t.String()),
          pdpa_accepted: __nullable__(t.Boolean()),
          pdpa_accepted_at: __nullable__(t.Date()),
          pdpa_version: __nullable__(t.String()),
          department: __nullable__(t.Integer()),
          company: __nullable__(t.Integer()),
          team: __nullable__(t.Integer()),
          is_active: __nullable__(t.Boolean()),
          extra_pages: t.Array(t.String(), { additionalProperties: false }),
          lineid_3nholdingapp: __nullable__(t.String()),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    ),
  },
  {
    additionalProperties: false,
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
This model contains an expression index which requires additional setup for migrations. Visit https://pris.ly/d/expression-indexes for more info.`,
  },
);

export const auth_usersPlainInputCreate = t.Object(
  {
    aud: t.Optional(__nullable__(t.String())),
    role: t.Optional(__nullable__(t.String())),
    email: t.Optional(__nullable__(t.String())),
    encrypted_password: t.Optional(__nullable__(t.String())),
    email_confirmed_at: t.Optional(__nullable__(t.Date())),
    invited_at: t.Optional(__nullable__(t.Date())),
    confirmation_token: t.Optional(__nullable__(t.String())),
    confirmation_sent_at: t.Optional(__nullable__(t.Date())),
    recovery_token: t.Optional(__nullable__(t.String())),
    recovery_sent_at: t.Optional(__nullable__(t.Date())),
    email_change_token_new: t.Optional(__nullable__(t.String())),
    email_change: t.Optional(__nullable__(t.String())),
    email_change_sent_at: t.Optional(__nullable__(t.Date())),
    last_sign_in_at: t.Optional(__nullable__(t.Date())),
    raw_app_meta_data: t.Optional(__nullable__(t.Any())),
    raw_user_meta_data: t.Optional(__nullable__(t.Any())),
    is_super_admin: t.Optional(__nullable__(t.Boolean())),
    created_at: t.Optional(__nullable__(t.Date())),
    updated_at: t.Optional(__nullable__(t.Date())),
    phone: t.Optional(__nullable__(t.String())),
    phone_confirmed_at: t.Optional(__nullable__(t.Date())),
    phone_change: t.Optional(__nullable__(t.String())),
    phone_change_token: t.Optional(__nullable__(t.String())),
    phone_change_sent_at: t.Optional(__nullable__(t.Date())),
    confirmed_at: t.Optional(__nullable__(t.Date())),
    email_change_token_current: t.Optional(__nullable__(t.String())),
    email_change_confirm_status: t.Optional(__nullable__(t.Integer())),
    banned_until: t.Optional(__nullable__(t.Date())),
    reauthentication_token: t.Optional(__nullable__(t.String())),
    reauthentication_sent_at: t.Optional(__nullable__(t.Date())),
    is_sso_user: t.Optional(t.Boolean()),
    deleted_at: t.Optional(__nullable__(t.Date())),
    is_anonymous: t.Optional(t.Boolean()),
  },
  {
    additionalProperties: false,
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
This model contains an expression index which requires additional setup for migrations. Visit https://pris.ly/d/expression-indexes for more info.`,
  },
);

export const auth_usersPlainInputUpdate = t.Object(
  {
    aud: t.Optional(__nullable__(t.String())),
    role: t.Optional(__nullable__(t.String())),
    email: t.Optional(__nullable__(t.String())),
    encrypted_password: t.Optional(__nullable__(t.String())),
    email_confirmed_at: t.Optional(__nullable__(t.Date())),
    invited_at: t.Optional(__nullable__(t.Date())),
    confirmation_token: t.Optional(__nullable__(t.String())),
    confirmation_sent_at: t.Optional(__nullable__(t.Date())),
    recovery_token: t.Optional(__nullable__(t.String())),
    recovery_sent_at: t.Optional(__nullable__(t.Date())),
    email_change_token_new: t.Optional(__nullable__(t.String())),
    email_change: t.Optional(__nullable__(t.String())),
    email_change_sent_at: t.Optional(__nullable__(t.Date())),
    last_sign_in_at: t.Optional(__nullable__(t.Date())),
    raw_app_meta_data: t.Optional(__nullable__(t.Any())),
    raw_user_meta_data: t.Optional(__nullable__(t.Any())),
    is_super_admin: t.Optional(__nullable__(t.Boolean())),
    created_at: t.Optional(__nullable__(t.Date())),
    updated_at: t.Optional(__nullable__(t.Date())),
    phone: t.Optional(__nullable__(t.String())),
    phone_confirmed_at: t.Optional(__nullable__(t.Date())),
    phone_change: t.Optional(__nullable__(t.String())),
    phone_change_token: t.Optional(__nullable__(t.String())),
    phone_change_sent_at: t.Optional(__nullable__(t.Date())),
    confirmed_at: t.Optional(__nullable__(t.Date())),
    email_change_token_current: t.Optional(__nullable__(t.String())),
    email_change_confirm_status: t.Optional(__nullable__(t.Integer())),
    banned_until: t.Optional(__nullable__(t.Date())),
    reauthentication_token: t.Optional(__nullable__(t.String())),
    reauthentication_sent_at: t.Optional(__nullable__(t.Date())),
    is_sso_user: t.Optional(t.Boolean()),
    deleted_at: t.Optional(__nullable__(t.Date())),
    is_anonymous: t.Optional(t.Boolean()),
  },
  {
    additionalProperties: false,
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
This model contains an expression index which requires additional setup for migrations. Visit https://pris.ly/d/expression-indexes for more info.`,
  },
);

export const auth_usersRelationsInputCreate = t.Object(
  {
    identities: t.Optional(
      t.Object(
        {
          connect: t.Array(
            t.Object(
              {
                id: t.String({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
    mfa_factors: t.Optional(
      t.Object(
        {
          connect: t.Array(
            t.Object(
              {
                id: t.String({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
    oauth_authorizations: t.Optional(
      t.Object(
        {
          connect: t.Array(
            t.Object(
              {
                id: t.String({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
    oauth_consents: t.Optional(
      t.Object(
        {
          connect: t.Array(
            t.Object(
              {
                id: t.String({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
    one_time_tokens: t.Optional(
      t.Object(
        {
          connect: t.Array(
            t.Object(
              {
                id: t.String({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
    sessions: t.Optional(
      t.Object(
        {
          connect: t.Array(
            t.Object(
              {
                id: t.String({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
    webauthn_challenges: t.Optional(
      t.Object(
        {
          connect: t.Array(
            t.Object(
              {
                id: t.String({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
    webauthn_credentials: t.Optional(
      t.Object(
        {
          connect: t.Array(
            t.Object(
              {
                id: t.String({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
    claim_requests: t.Optional(
      t.Object(
        {
          connect: t.Array(
            t.Object(
              {
                id: t.String({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
    customer_group: t.Optional(
      t.Object(
        {
          connect: t.Array(
            t.Object(
              {
                id: t.String({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
    customer_requests: t.Optional(
      t.Object(
        {
          connect: t.Array(
            t.Object(
              {
                id: t.Integer({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
    customer_segment: t.Optional(
      t.Object(
        {
          connect: t.Array(
            t.Object(
              {
                id: t.String({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
    customeruser: t.Optional(
      t.Object(
        {
          connect: t.Object(
            {
              id: t.String({ additionalProperties: false }),
            },
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
    deliveries: t.Optional(
      t.Object(
        {
          connect: t.Array(
            t.Object(
              {
                id: t.Integer({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
    dhl_shipments: t.Optional(
      t.Object(
        {
          connect: t.Array(
            t.Object(
              {
                id: t.String({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
    noti_read_log: t.Optional(
      t.Object(
        {
          connect: t.Array(
            t.Object(
              {
                id: t.Integer({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
    product_review_product_review_replied_byTousers: t.Optional(
      t.Object(
        {
          connect: t.Array(
            t.Object(
              {
                id: t.String({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
    product_review_product_review_user_idTousers: t.Optional(
      t.Object(
        {
          connect: t.Array(
            t.Object(
              {
                id: t.String({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
    user_favorites: t.Optional(
      t.Object(
        {
          connect: t.Array(
            t.Object(
              {
                id: t.Integer({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
    user_login_history: t.Optional(
      t.Object(
        {
          connect: t.Array(
            t.Object(
              {
                id: t.String({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
    users: t.Optional(
      t.Object(
        {
          connect: t.Object(
            {
              id: t.String({ additionalProperties: false }),
            },
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
  },
  {
    additionalProperties: false,
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
This model contains an expression index which requires additional setup for migrations. Visit https://pris.ly/d/expression-indexes for more info.`,
  },
);

export const auth_usersRelationsInputUpdate = t.Partial(
  t.Object(
    {
      identities: t.Partial(
        t.Object(
          {
            connect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
            disconnect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
          },
          { additionalProperties: false },
        ),
      ),
      mfa_factors: t.Partial(
        t.Object(
          {
            connect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
            disconnect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
          },
          { additionalProperties: false },
        ),
      ),
      oauth_authorizations: t.Partial(
        t.Object(
          {
            connect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
            disconnect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
          },
          { additionalProperties: false },
        ),
      ),
      oauth_consents: t.Partial(
        t.Object(
          {
            connect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
            disconnect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
          },
          { additionalProperties: false },
        ),
      ),
      one_time_tokens: t.Partial(
        t.Object(
          {
            connect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
            disconnect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
          },
          { additionalProperties: false },
        ),
      ),
      sessions: t.Partial(
        t.Object(
          {
            connect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
            disconnect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
          },
          { additionalProperties: false },
        ),
      ),
      webauthn_challenges: t.Partial(
        t.Object(
          {
            connect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
            disconnect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
          },
          { additionalProperties: false },
        ),
      ),
      webauthn_credentials: t.Partial(
        t.Object(
          {
            connect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
            disconnect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
          },
          { additionalProperties: false },
        ),
      ),
      claim_requests: t.Partial(
        t.Object(
          {
            connect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
            disconnect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
          },
          { additionalProperties: false },
        ),
      ),
      customer_group: t.Partial(
        t.Object(
          {
            connect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
            disconnect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
          },
          { additionalProperties: false },
        ),
      ),
      customer_requests: t.Partial(
        t.Object(
          {
            connect: t.Array(
              t.Object(
                {
                  id: t.Integer({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
            disconnect: t.Array(
              t.Object(
                {
                  id: t.Integer({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
          },
          { additionalProperties: false },
        ),
      ),
      customer_segment: t.Partial(
        t.Object(
          {
            connect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
            disconnect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
          },
          { additionalProperties: false },
        ),
      ),
      customeruser: t.Partial(
        t.Object(
          {
            connect: t.Object(
              {
                id: t.String({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            disconnect: t.Boolean(),
          },
          { additionalProperties: false },
        ),
      ),
      deliveries: t.Partial(
        t.Object(
          {
            connect: t.Array(
              t.Object(
                {
                  id: t.Integer({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
            disconnect: t.Array(
              t.Object(
                {
                  id: t.Integer({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
          },
          { additionalProperties: false },
        ),
      ),
      dhl_shipments: t.Partial(
        t.Object(
          {
            connect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
            disconnect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
          },
          { additionalProperties: false },
        ),
      ),
      noti_read_log: t.Partial(
        t.Object(
          {
            connect: t.Array(
              t.Object(
                {
                  id: t.Integer({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
            disconnect: t.Array(
              t.Object(
                {
                  id: t.Integer({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
          },
          { additionalProperties: false },
        ),
      ),
      product_review_product_review_replied_byTousers: t.Partial(
        t.Object(
          {
            connect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
            disconnect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
          },
          { additionalProperties: false },
        ),
      ),
      product_review_product_review_user_idTousers: t.Partial(
        t.Object(
          {
            connect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
            disconnect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
          },
          { additionalProperties: false },
        ),
      ),
      user_favorites: t.Partial(
        t.Object(
          {
            connect: t.Array(
              t.Object(
                {
                  id: t.Integer({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
            disconnect: t.Array(
              t.Object(
                {
                  id: t.Integer({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
          },
          { additionalProperties: false },
        ),
      ),
      user_login_history: t.Partial(
        t.Object(
          {
            connect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
            disconnect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
          },
          { additionalProperties: false },
        ),
      ),
      users: t.Partial(
        t.Object(
          {
            connect: t.Object(
              {
                id: t.String({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            disconnect: t.Boolean(),
          },
          { additionalProperties: false },
        ),
      ),
    },
    {
      additionalProperties: false,
      description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
This model contains an expression index which requires additional setup for migrations. Visit https://pris.ly/d/expression-indexes for more info.`,
    },
  ),
);

export const auth_usersWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          instance_id: t.String(),
          id: t.String(),
          aud: t.String(),
          role: t.String(),
          email: t.String(),
          encrypted_password: t.String(),
          email_confirmed_at: t.Date(),
          invited_at: t.Date(),
          confirmation_token: t.String(),
          confirmation_sent_at: t.Date(),
          recovery_token: t.String(),
          recovery_sent_at: t.Date(),
          email_change_token_new: t.String(),
          email_change: t.String(),
          email_change_sent_at: t.Date(),
          last_sign_in_at: t.Date(),
          raw_app_meta_data: t.Any(),
          raw_user_meta_data: t.Any(),
          is_super_admin: t.Boolean(),
          created_at: t.Date(),
          updated_at: t.Date(),
          phone: t.String(),
          phone_confirmed_at: t.Date(),
          phone_change: t.String(),
          phone_change_token: t.String(),
          phone_change_sent_at: t.Date(),
          confirmed_at: t.Date(),
          email_change_token_current: t.String(),
          email_change_confirm_status: t.Integer(),
          banned_until: t.Date(),
          reauthentication_token: t.String(),
          reauthentication_sent_at: t.Date(),
          is_sso_user: t.Boolean(),
          deleted_at: t.Date(),
          is_anonymous: t.Boolean(),
        },
        {
          additionalProperties: false,
          description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
This model contains an expression index which requires additional setup for migrations. Visit https://pris.ly/d/expression-indexes for more info.`,
        },
      ),
    { $id: "auth_users" },
  ),
);

export const auth_usersWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            { id: t.String(), phone: t.String() },
            {
              additionalProperties: false,
              description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
This model contains an expression index which requires additional setup for migrations. Visit https://pris.ly/d/expression-indexes for more info.`,
            },
          ),
          { additionalProperties: false },
        ),
        t.Union(
          [t.Object({ id: t.String() }), t.Object({ phone: t.String() })],
          { additionalProperties: false },
        ),
        t.Partial(
          t.Object({
            AND: t.Union([
              Self,
              t.Array(Self, { additionalProperties: false }),
            ]),
            NOT: t.Union([
              Self,
              t.Array(Self, { additionalProperties: false }),
            ]),
            OR: t.Array(Self, { additionalProperties: false }),
          }),
          { additionalProperties: false },
        ),
        t.Partial(
          t.Object(
            {
              instance_id: t.String(),
              id: t.String(),
              aud: t.String(),
              role: t.String(),
              email: t.String(),
              encrypted_password: t.String(),
              email_confirmed_at: t.Date(),
              invited_at: t.Date(),
              confirmation_token: t.String(),
              confirmation_sent_at: t.Date(),
              recovery_token: t.String(),
              recovery_sent_at: t.Date(),
              email_change_token_new: t.String(),
              email_change: t.String(),
              email_change_sent_at: t.Date(),
              last_sign_in_at: t.Date(),
              raw_app_meta_data: t.Any(),
              raw_user_meta_data: t.Any(),
              is_super_admin: t.Boolean(),
              created_at: t.Date(),
              updated_at: t.Date(),
              phone: t.String(),
              phone_confirmed_at: t.Date(),
              phone_change: t.String(),
              phone_change_token: t.String(),
              phone_change_sent_at: t.Date(),
              confirmed_at: t.Date(),
              email_change_token_current: t.String(),
              email_change_confirm_status: t.Integer(),
              banned_until: t.Date(),
              reauthentication_token: t.String(),
              reauthentication_sent_at: t.Date(),
              is_sso_user: t.Boolean(),
              deleted_at: t.Date(),
              is_anonymous: t.Boolean(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "auth_users" },
);

export const auth_usersSelect = t.Partial(
  t.Object(
    {
      instance_id: t.Boolean(),
      id: t.Boolean(),
      aud: t.Boolean(),
      role: t.Boolean(),
      email: t.Boolean(),
      encrypted_password: t.Boolean(),
      email_confirmed_at: t.Boolean(),
      invited_at: t.Boolean(),
      confirmation_token: t.Boolean(),
      confirmation_sent_at: t.Boolean(),
      recovery_token: t.Boolean(),
      recovery_sent_at: t.Boolean(),
      email_change_token_new: t.Boolean(),
      email_change: t.Boolean(),
      email_change_sent_at: t.Boolean(),
      last_sign_in_at: t.Boolean(),
      raw_app_meta_data: t.Boolean(),
      raw_user_meta_data: t.Boolean(),
      is_super_admin: t.Boolean(),
      created_at: t.Boolean(),
      updated_at: t.Boolean(),
      phone: t.Boolean(),
      phone_confirmed_at: t.Boolean(),
      phone_change: t.Boolean(),
      phone_change_token: t.Boolean(),
      phone_change_sent_at: t.Boolean(),
      confirmed_at: t.Boolean(),
      email_change_token_current: t.Boolean(),
      email_change_confirm_status: t.Boolean(),
      banned_until: t.Boolean(),
      reauthentication_token: t.Boolean(),
      reauthentication_sent_at: t.Boolean(),
      is_sso_user: t.Boolean(),
      deleted_at: t.Boolean(),
      is_anonymous: t.Boolean(),
      identities: t.Boolean(),
      mfa_factors: t.Boolean(),
      oauth_authorizations: t.Boolean(),
      oauth_consents: t.Boolean(),
      one_time_tokens: t.Boolean(),
      sessions: t.Boolean(),
      webauthn_challenges: t.Boolean(),
      webauthn_credentials: t.Boolean(),
      claim_requests: t.Boolean(),
      customer_group: t.Boolean(),
      customer_requests: t.Boolean(),
      customer_segment: t.Boolean(),
      customeruser: t.Boolean(),
      deliveries: t.Boolean(),
      dhl_shipments: t.Boolean(),
      noti_read_log: t.Boolean(),
      product_review_product_review_replied_byTousers: t.Boolean(),
      product_review_product_review_user_idTousers: t.Boolean(),
      user_favorites: t.Boolean(),
      user_login_history: t.Boolean(),
      users: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
This model contains an expression index which requires additional setup for migrations. Visit https://pris.ly/d/expression-indexes for more info.`,
    },
  ),
);

export const auth_usersInclude = t.Partial(
  t.Object(
    {
      identities: t.Boolean(),
      mfa_factors: t.Boolean(),
      oauth_authorizations: t.Boolean(),
      oauth_consents: t.Boolean(),
      one_time_tokens: t.Boolean(),
      sessions: t.Boolean(),
      webauthn_challenges: t.Boolean(),
      webauthn_credentials: t.Boolean(),
      claim_requests: t.Boolean(),
      customer_group: t.Boolean(),
      customer_requests: t.Boolean(),
      customer_segment: t.Boolean(),
      customeruser: t.Boolean(),
      deliveries: t.Boolean(),
      dhl_shipments: t.Boolean(),
      noti_read_log: t.Boolean(),
      product_review_product_review_replied_byTousers: t.Boolean(),
      product_review_product_review_user_idTousers: t.Boolean(),
      user_favorites: t.Boolean(),
      user_login_history: t.Boolean(),
      users: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
This model contains an expression index which requires additional setup for migrations. Visit https://pris.ly/d/expression-indexes for more info.`,
    },
  ),
);

export const auth_usersOrderBy = t.Partial(
  t.Object(
    {
      instance_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      aud: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      role: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      email: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      encrypted_password: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      email_confirmed_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      invited_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      confirmation_token: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      confirmation_sent_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      recovery_token: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      recovery_sent_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      email_change_token_new: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      email_change: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      email_change_sent_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      last_sign_in_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      raw_app_meta_data: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      raw_user_meta_data: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      is_super_admin: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      updated_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      phone: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      phone_confirmed_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      phone_change: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      phone_change_token: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      phone_change_sent_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      confirmed_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      email_change_token_current: t.Union(
        [t.Literal("asc"), t.Literal("desc")],
        { additionalProperties: false },
      ),
      email_change_confirm_status: t.Union(
        [t.Literal("asc"), t.Literal("desc")],
        { additionalProperties: false },
      ),
      banned_until: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      reauthentication_token: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      reauthentication_sent_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      is_sso_user: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      deleted_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      is_anonymous: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
This model contains an expression index which requires additional setup for migrations. Visit https://pris.ly/d/expression-indexes for more info.`,
    },
  ),
);

export const auth_users = t.Composite([auth_usersPlain, auth_usersRelations], {
  additionalProperties: false,
});

export const auth_usersInputCreate = t.Composite(
  [auth_usersPlainInputCreate, auth_usersRelationsInputCreate],
  { additionalProperties: false },
);

export const auth_usersInputUpdate = t.Composite(
  [auth_usersPlainInputUpdate, auth_usersRelationsInputUpdate],
  { additionalProperties: false },
);
