import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const customeruserPlain = t.Object(
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
);

export const customeruserRelations = t.Object(
  {
    IM: t.Array(
      t.Object(
        {
          id: t.Integer(),
          created_at: t.Date(),
          docid: t.String(),
          customer: __nullable__(t.String()),
          note: __nullable__(t.String()),
          create_by: __nullable__(t.String()),
          status: __nullable__(t.String()),
          im: __nullable__(t.String()),
          customer_name: __nullable__(t.String()),
          tel: __nullable__(t.String()),
          updated_at: __nullable__(t.Date()),
          update_by: __nullable__(t.String()),
          history: __nullable__(t.Any()),
          type: __nullable__(t.String()),
          delivery_address_id: __nullable__(t.String()),
          invoice_id: __nullable__(t.Integer()),
          shipping_address: __nullable__(t.String()),
          has_fifo_violation: __nullable__(t.Boolean()),
          price_valid_days: __nullable__(t.String()),
          delivery_days: __nullable__(t.String()),
          payment_days: __nullable__(t.String()),
          customeruser_id: __nullable__(t.String()),
          contact_id: __nullable__(t.Integer()),
          prefix: __nullable__(t.String()),
          need_smapprove: __nullable__(t.Boolean()),
          sopt_id: __nullable__(t.Integer()),
        },
        {
          additionalProperties: false,
          description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
        },
      ),
      { additionalProperties: false },
    ),
    assett: t.Array(
      t.Object(
        {
          id: t.Integer(),
          created_at: t.Date(),
          customeruser_id: __nullable__(t.String()),
          contact_id: __nullable__(t.Integer()),
          install: __nullable__(t.String()),
          install_place: __nullable__(t.String()),
          installer: __nullable__(t.String()),
          recorded_by: __nullable__(t.String()),
          sale_person_id: __nullable__(t.String()),
          ref_doc: __nullable__(t.String()),
          note: __nullable__(t.String()),
          doc_id: __nullable__(t.String()),
          companies_id: __nullable__(t.Integer()),
          status: __nullable__(t.String()),
          log: __nullable__(t.String()),
          action_date: __nullable__(t.Date()),
          type: __nullable__(t.String()),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
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
    customer_delivery: t.Array(
      t.Object(
        {
          id: t.String(),
          created_at: t.Date(),
          customer_id: __nullable__(t.String()),
          tel: __nullable__(t.String()),
          address1: __nullable__(t.String()),
          address2: __nullable__(t.String()),
          subdestrict: __nullable__(t.String()),
          destrict: __nullable__(t.String()),
          province: __nullable__(t.String()),
          postel: __nullable__(t.String()),
          contact_id: __nullable__(t.Integer()),
          recerived_name: __nullable__(t.String()),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
    customer_invoice: t.Array(
      t.Object(
        {
          id: t.Integer(),
          created_at: t.Date(),
          invoice_id: __nullable__(t.Integer()),
          customeruser_id: __nullable__(t.String()),
          contact_id: __nullable__(t.Integer()),
        },
        { additionalProperties: false },
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
    customer_saved_cards: t.Array(
      t.Object(
        {
          id: t.String(),
          customer_id: t.String(),
          card_type: t.String(),
          masked_number: t.String(),
          is_default: t.Boolean(),
          created_at: t.Date(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
      { additionalProperties: false },
    ),
    customer_tax_invoices: t.Array(
      t.Object(
        {
          id: t.String(),
          customer_id: t.String(),
          type: t.String(),
          name: t.String(),
          tax_id: t.String(),
          email: t.String(),
          phone: __nullable__(t.String()),
          address: t.String(),
          postal_code: __nullable__(t.String()),
          is_head_office: __nullable__(t.Boolean()),
          is_default: t.Boolean(),
          created_at: t.Date(),
        },
        {
          additionalProperties: false,
          description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
      { additionalProperties: false },
    ),
    customer_tier: __nullable__(
      t.Object(
        {
          id: t.String(),
          user_id: __nullable__(t.String()),
          tier: t.String(),
          start_at: t.Date(),
          expired_at: t.Date(),
        },
        { additionalProperties: false },
      ),
    ),
    customerevent: t.Array(
      t.Object(
        {
          id: t.String(),
          created_at: t.Date(),
          event_id: __nullable__(t.String()),
          customeruser_id: __nullable__(t.String()),
          registerdate: __nullable__(t.Date()),
          attendevent: __nullable__(t.Date()),
          type: __nullable__(t.String()),
          checked_in: __nullable__(t.Boolean()),
          checkin_at: __nullable__(t.Date()),
          qr_token: __nullable__(t.String()),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
    customerseminar: t.Array(
      t.Object(
        {
          id: t.Integer(),
          customeruser_id: t.String(),
          seminar_uuid: t.String(),
          seminar_dwid: t.String(),
          registered_at: __nullable__(t.Date()),
          status: __nullable__(t.String()),
          company: __nullable__(t.String()),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
    users: __nullable__(
      t.Object(
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
      ),
    ),
    customeruser_users: t.Array(
      t.Object(
        {
          id: t.Integer(),
          created_at: t.Date(),
          customeruser_id: __nullable__(t.String()),
          users_id: __nullable__(t.String()),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
    email_logs: t.Array(
      t.Object(
        {
          id: t.String(),
          customeruser_id: __nullable__(t.String()),
          customerevent_id: __nullable__(t.String()),
          email_type: t.String(),
          recipient_email: t.String(),
          subject: __nullable__(t.String()),
          status: __nullable__(t.String()),
          message_id: __nullable__(t.String()),
          error_message: __nullable__(t.String()),
          sent_at: __nullable__(t.Date()),
          metadata: __nullable__(t.Any()),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
    notification_logs: t.Array(
      t.Object(
        {
          id: t.String(),
          user_id: t.String(),
          point_id: t.String(),
          notification_type: t.String(),
          sent_at: __nullable__(t.Date()),
          status: __nullable__(t.String()),
          metadata: __nullable__(t.Any()),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
    order: t.Array(
      t.Object(
        {
          created_at: t.Date(),
          member_id: __nullable__(t.String()),
          invoicehead_id: __nullable__(t.Integer()),
          delivery: __nullable__(t.String()),
          payment_type: __nullable__(t.Integer()),
          payment_date: __nullable__(t.Date()),
          parmanet_referrence: __nullable__(t.String()),
          id: t.String(),
          status: t.String(),
          total_amount: __nullable__(t.Number()),
          subtotal: __nullable__(t.Number()),
          discount: __nullable__(t.Number()),
          shipping_fee: __nullable__(t.Number()),
          note: __nullable__(t.String()),
          invoice: __nullable__(t.String()),
          log: __nullable__(t.String()),
          voucher_id: __nullable__(t.Integer()),
          voucher_discount: __nullable__(t.Number()),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
      { additionalProperties: false },
    ),
    promotion_claim_history: t.Array(
      t.Object(
        {
          id: t.Integer(),
          promotion_id: t.Integer(),
          user_id: t.String(),
          claimed_at: __nullable__(t.Date()),
          points_awarded: t.Integer(),
          voucher_id: __nullable__(t.Integer()),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
    reward_points: t.Array(
      t.Object(
        {
          id: t.String(),
          user_id: __nullable__(t.String()),
          points: t.Integer(),
          created_at: __nullable__(t.Date()),
          expired_at: t.Date(),
          doc_id: __nullable__(t.String()),
          redeem_point: __nullable__(t.Number()),
          redeem_exp: __nullable__(t.Date()),
          reason: __nullable__(t.String()),
          log: __nullable__(t.String()),
          doc_date: __nullable__(t.String()),
          campaign_id: __nullable__(t.String()),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
      { additionalProperties: false },
    ),
    reward_redemptions: t.Array(
      t.Object(
        {
          id: t.String(),
          user_id: t.String(),
          reward_id: t.String(),
          points_used: t.Integer(),
          redeemed_at: __nullable__(t.Date()),
          status: __nullable__(t.String()),
          note: __nullable__(t.String()),
          redeemed_count: __nullable__(t.Number()),
          address: __nullable__(t.String()),
          address_type: __nullable__(t.String()),
          delivery_status: __nullable__(t.String()),
          updated_at: __nullable__(t.String()),
          log: __nullable__(t.String()),
        },
        {
          additionalProperties: false,
          description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
      { additionalProperties: false },
    ),
    sopt_head: t.Array(
      t.Object(
        {
          id: t.Integer(),
          created_at: t.Date(),
          customeruser_id: __nullable__(t.String()),
          contact_id: __nullable__(t.Integer()),
          doc_id: __nullable__(t.String()),
          users_id: __nullable__(t.String()),
          budget_year: __nullable__(t.String()),
          end_date: __nullable__(t.Date()),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
      { additionalProperties: false },
    ),
    survey_responses: t.Array(
      t.Object(
        {
          id: t.Integer(),
          survey_id: __nullable__(t.Integer()),
          customer_id: __nullable__(t.String()),
          submitted_at: __nullable__(t.Date()),
          points_awarded: __nullable__(t.Integer()),
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
    user_reading_progress: t.Array(
      t.Object(
        {
          id: t.String(),
          user_id: t.String(),
          content_type: t.String(),
          content_id: t.String(),
          content_title: __nullable__(t.String()),
          read_at: __nullable__(t.Date()),
          campaign_id: __nullable__(t.String()),
          create_at: __nullable__(t.Date()),
          updated_at: __nullable__(t.Date()),
          last_read_at: __nullable__(t.Date()),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
      { additionalProperties: false },
    ),
  },
  { additionalProperties: false },
);

export const customeruserPlainInputCreate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    prefix: t.Optional(__nullable__(t.String())),
    namesurname: t.Optional(__nullable__(t.String())),
    email: t.Optional(__nullable__(t.String())),
    tel: t.Optional(__nullable__(t.String())),
    pdpa_accepted: t.Optional(__nullable__(t.Boolean())),
    pdpa_accepted_at: t.Optional(__nullable__(t.Date())),
    pdpa_version: t.Optional(__nullable__(t.String())),
    gender: t.Optional(__nullable__(t.String())),
    birthday: t.Optional(__nullable__(t.Date())),
    home_address_line1: t.Optional(__nullable__(t.String())),
    home_address_line2: t.Optional(__nullable__(t.String())),
    home_sub_district: t.Optional(__nullable__(t.String())),
    home_district: t.Optional(__nullable__(t.String())),
    home_province: t.Optional(__nullable__(t.String())),
    home_postal_code: t.Optional(__nullable__(t.String())),
    w1_address_line1: t.Optional(__nullable__(t.String())),
    w1_address_line2: t.Optional(__nullable__(t.String())),
    w1_sub_district: t.Optional(__nullable__(t.String())),
    w1_district: t.Optional(__nullable__(t.String())),
    w1_province: t.Optional(__nullable__(t.String())),
    w1_postal_code: t.Optional(__nullable__(t.String())),
    position: t.Optional(__nullable__(t.String())),
    w1_name: t.Optional(__nullable__(t.String())),
    status: t.Optional(__nullable__(t.String())),
    note: t.Optional(__nullable__(t.String())),
    Preferred_Contact_Channel: t.Optional(__nullable__(t.String())),
    fcm_token: t.Optional(__nullable__(t.String())),
    avatar_url: t.Optional(__nullable__(t.String())),
    is_online: t.Optional(__nullable__(t.Boolean())),
    last_online: t.Optional(__nullable__(t.String())),
    picprofile: t.Optional(__nullable__(t.String())),
    wtel: t.Optional(__nullable__(t.String())),
    gibthailink: t.Optional(__nullable__(t.Any())),
    biodesignlink: t.Optional(__nullable__(t.Any())),
    lableaderlink: t.Optional(__nullable__(t.Any())),
    aeclink: t.Optional(__nullable__(t.Any())),
    doctorcallink: t.Optional(__nullable__(t.Any())),
    miclink: t.Optional(__nullable__(t.Any())),
    log: t.Optional(__nullable__(t.String())),
    department: t.Optional(__nullable__(t.String())),
    knowform: t.Optional(__nullable__(t.String())),
    referred_by: t.Optional(__nullable__(t.String())),
    uninstalled_at: t.Optional(__nullable__(t.Date())),
    source: t.Optional(__nullable__(t.String())),
    tel2: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const customeruserPlainInputUpdate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    prefix: t.Optional(__nullable__(t.String())),
    namesurname: t.Optional(__nullable__(t.String())),
    email: t.Optional(__nullable__(t.String())),
    tel: t.Optional(__nullable__(t.String())),
    pdpa_accepted: t.Optional(__nullable__(t.Boolean())),
    pdpa_accepted_at: t.Optional(__nullable__(t.Date())),
    pdpa_version: t.Optional(__nullable__(t.String())),
    gender: t.Optional(__nullable__(t.String())),
    birthday: t.Optional(__nullable__(t.Date())),
    home_address_line1: t.Optional(__nullable__(t.String())),
    home_address_line2: t.Optional(__nullable__(t.String())),
    home_sub_district: t.Optional(__nullable__(t.String())),
    home_district: t.Optional(__nullable__(t.String())),
    home_province: t.Optional(__nullable__(t.String())),
    home_postal_code: t.Optional(__nullable__(t.String())),
    w1_address_line1: t.Optional(__nullable__(t.String())),
    w1_address_line2: t.Optional(__nullable__(t.String())),
    w1_sub_district: t.Optional(__nullable__(t.String())),
    w1_district: t.Optional(__nullable__(t.String())),
    w1_province: t.Optional(__nullable__(t.String())),
    w1_postal_code: t.Optional(__nullable__(t.String())),
    position: t.Optional(__nullable__(t.String())),
    w1_name: t.Optional(__nullable__(t.String())),
    status: t.Optional(__nullable__(t.String())),
    note: t.Optional(__nullable__(t.String())),
    Preferred_Contact_Channel: t.Optional(__nullable__(t.String())),
    fcm_token: t.Optional(__nullable__(t.String())),
    avatar_url: t.Optional(__nullable__(t.String())),
    is_online: t.Optional(__nullable__(t.Boolean())),
    last_online: t.Optional(__nullable__(t.String())),
    picprofile: t.Optional(__nullable__(t.String())),
    wtel: t.Optional(__nullable__(t.String())),
    gibthailink: t.Optional(__nullable__(t.Any())),
    biodesignlink: t.Optional(__nullable__(t.Any())),
    lableaderlink: t.Optional(__nullable__(t.Any())),
    aeclink: t.Optional(__nullable__(t.Any())),
    doctorcallink: t.Optional(__nullable__(t.Any())),
    miclink: t.Optional(__nullable__(t.Any())),
    log: t.Optional(__nullable__(t.String())),
    department: t.Optional(__nullable__(t.String())),
    knowform: t.Optional(__nullable__(t.String())),
    referred_by: t.Optional(__nullable__(t.String())),
    uninstalled_at: t.Optional(__nullable__(t.Date())),
    source: t.Optional(__nullable__(t.String())),
    tel2: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const customeruserRelationsInputCreate = t.Object(
  {
    IM: t.Optional(
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
    assett: t.Optional(
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
    customer_delivery: t.Optional(
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
    customer_invoice: t.Optional(
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
    customer_saved_cards: t.Optional(
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
    customer_tax_invoices: t.Optional(
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
    customer_tier: t.Optional(
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
    customerevent: t.Optional(
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
    customerseminar: t.Optional(
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
    customeruser_users: t.Optional(
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
    email_logs: t.Optional(
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
    notification_logs: t.Optional(
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
    order: t.Optional(
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
    promotion_claim_history: t.Optional(
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
    reward_points: t.Optional(
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
    reward_redemptions: t.Optional(
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
    sopt_head: t.Optional(
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
    survey_responses: t.Optional(
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
    user_reading_progress: t.Optional(
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
  },
  { additionalProperties: false },
);

export const customeruserRelationsInputUpdate = t.Partial(
  t.Object(
    {
      IM: t.Partial(
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
      assett: t.Partial(
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
      customer_delivery: t.Partial(
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
      customer_invoice: t.Partial(
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
      customer_saved_cards: t.Partial(
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
      customer_tax_invoices: t.Partial(
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
      customer_tier: t.Partial(
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
      customerevent: t.Partial(
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
      customerseminar: t.Partial(
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
      customeruser_users: t.Partial(
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
      email_logs: t.Partial(
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
      notification_logs: t.Partial(
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
      order: t.Partial(
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
      promotion_claim_history: t.Partial(
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
      reward_points: t.Partial(
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
      reward_redemptions: t.Partial(
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
      sopt_head: t.Partial(
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
      survey_responses: t.Partial(
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
      user_reading_progress: t.Partial(
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
    },
    { additionalProperties: false },
  ),
);

export const customeruserWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          authid: t.String(),
          member_id: t.String(),
          created_at: t.Date(),
          prefix: t.String(),
          namesurname: t.String(),
          email: t.String(),
          tel: t.String(),
          pdpa_accepted: t.Boolean(),
          pdpa_accepted_at: t.Date(),
          pdpa_version: t.String(),
          gender: t.String(),
          birthday: t.Date(),
          home_address_line1: t.String(),
          home_address_line2: t.String(),
          home_sub_district: t.String(),
          home_district: t.String(),
          home_province: t.String(),
          home_postal_code: t.String(),
          w1_address_line1: t.String(),
          w1_address_line2: t.String(),
          w1_sub_district: t.String(),
          w1_district: t.String(),
          w1_province: t.String(),
          w1_postal_code: t.String(),
          position: t.String(),
          w1_name: t.String(),
          status: t.String(),
          note: t.String(),
          Preferred_Contact_Channel: t.String(),
          fcm_token: t.String(),
          avatar_url: t.String(),
          line_id: t.String(),
          is_online: t.Boolean(),
          last_online: t.String(),
          picprofile: t.String(),
          wtel: t.String(),
          gibthailink: t.Any(),
          biodesignlink: t.Any(),
          lableaderlink: t.Any(),
          aeclink: t.Any(),
          doctorcallink: t.Any(),
          miclink: t.Any(),
          log: t.String(),
          department: t.String(),
          knowform: t.String(),
          referred_by: t.String(),
          uninstalled_at: t.Date(),
          line_user_id: t.String(),
          facebook_psid: t.String(),
          source: t.String(),
          tel2: t.String(),
        },
        { additionalProperties: false },
      ),
    { $id: "customeruser" },
  ),
);

export const customeruserWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            { id: t.String(), authid: t.String(), member_id: t.String() },
            { additionalProperties: false },
          ),
          { additionalProperties: false },
        ),
        t.Union(
          [
            t.Object({ id: t.String() }),
            t.Object({ authid: t.String() }),
            t.Object({ member_id: t.String() }),
          ],
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
              id: t.String(),
              authid: t.String(),
              member_id: t.String(),
              created_at: t.Date(),
              prefix: t.String(),
              namesurname: t.String(),
              email: t.String(),
              tel: t.String(),
              pdpa_accepted: t.Boolean(),
              pdpa_accepted_at: t.Date(),
              pdpa_version: t.String(),
              gender: t.String(),
              birthday: t.Date(),
              home_address_line1: t.String(),
              home_address_line2: t.String(),
              home_sub_district: t.String(),
              home_district: t.String(),
              home_province: t.String(),
              home_postal_code: t.String(),
              w1_address_line1: t.String(),
              w1_address_line2: t.String(),
              w1_sub_district: t.String(),
              w1_district: t.String(),
              w1_province: t.String(),
              w1_postal_code: t.String(),
              position: t.String(),
              w1_name: t.String(),
              status: t.String(),
              note: t.String(),
              Preferred_Contact_Channel: t.String(),
              fcm_token: t.String(),
              avatar_url: t.String(),
              line_id: t.String(),
              is_online: t.Boolean(),
              last_online: t.String(),
              picprofile: t.String(),
              wtel: t.String(),
              gibthailink: t.Any(),
              biodesignlink: t.Any(),
              lableaderlink: t.Any(),
              aeclink: t.Any(),
              doctorcallink: t.Any(),
              miclink: t.Any(),
              log: t.String(),
              department: t.String(),
              knowform: t.String(),
              referred_by: t.String(),
              uninstalled_at: t.Date(),
              line_user_id: t.String(),
              facebook_psid: t.String(),
              source: t.String(),
              tel2: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "customeruser" },
);

export const customeruserSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      authid: t.Boolean(),
      member_id: t.Boolean(),
      created_at: t.Boolean(),
      prefix: t.Boolean(),
      namesurname: t.Boolean(),
      email: t.Boolean(),
      tel: t.Boolean(),
      pdpa_accepted: t.Boolean(),
      pdpa_accepted_at: t.Boolean(),
      pdpa_version: t.Boolean(),
      gender: t.Boolean(),
      birthday: t.Boolean(),
      home_address_line1: t.Boolean(),
      home_address_line2: t.Boolean(),
      home_sub_district: t.Boolean(),
      home_district: t.Boolean(),
      home_province: t.Boolean(),
      home_postal_code: t.Boolean(),
      w1_address_line1: t.Boolean(),
      w1_address_line2: t.Boolean(),
      w1_sub_district: t.Boolean(),
      w1_district: t.Boolean(),
      w1_province: t.Boolean(),
      w1_postal_code: t.Boolean(),
      position: t.Boolean(),
      w1_name: t.Boolean(),
      status: t.Boolean(),
      note: t.Boolean(),
      Preferred_Contact_Channel: t.Boolean(),
      fcm_token: t.Boolean(),
      avatar_url: t.Boolean(),
      line_id: t.Boolean(),
      is_online: t.Boolean(),
      last_online: t.Boolean(),
      picprofile: t.Boolean(),
      wtel: t.Boolean(),
      gibthailink: t.Boolean(),
      biodesignlink: t.Boolean(),
      lableaderlink: t.Boolean(),
      aeclink: t.Boolean(),
      doctorcallink: t.Boolean(),
      miclink: t.Boolean(),
      log: t.Boolean(),
      department: t.Boolean(),
      knowform: t.Boolean(),
      referred_by: t.Boolean(),
      uninstalled_at: t.Boolean(),
      line_user_id: t.Boolean(),
      facebook_psid: t.Boolean(),
      source: t.Boolean(),
      tel2: t.Boolean(),
      IM: t.Boolean(),
      assett: t.Boolean(),
      claim_requests: t.Boolean(),
      customer_delivery: t.Boolean(),
      customer_invoice: t.Boolean(),
      customer_requests: t.Boolean(),
      customer_saved_cards: t.Boolean(),
      customer_tax_invoices: t.Boolean(),
      customer_tier: t.Boolean(),
      customerevent: t.Boolean(),
      customerseminar: t.Boolean(),
      users: t.Boolean(),
      customeruser_users: t.Boolean(),
      email_logs: t.Boolean(),
      notification_logs: t.Boolean(),
      order: t.Boolean(),
      promotion_claim_history: t.Boolean(),
      reward_points: t.Boolean(),
      reward_redemptions: t.Boolean(),
      sopt_head: t.Boolean(),
      survey_responses: t.Boolean(),
      user_login_history: t.Boolean(),
      user_reading_progress: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const customeruserInclude = t.Partial(
  t.Object(
    {
      IM: t.Boolean(),
      assett: t.Boolean(),
      claim_requests: t.Boolean(),
      customer_delivery: t.Boolean(),
      customer_invoice: t.Boolean(),
      customer_requests: t.Boolean(),
      customer_saved_cards: t.Boolean(),
      customer_tax_invoices: t.Boolean(),
      customer_tier: t.Boolean(),
      customerevent: t.Boolean(),
      customerseminar: t.Boolean(),
      users: t.Boolean(),
      customeruser_users: t.Boolean(),
      email_logs: t.Boolean(),
      notification_logs: t.Boolean(),
      order: t.Boolean(),
      promotion_claim_history: t.Boolean(),
      reward_points: t.Boolean(),
      reward_redemptions: t.Boolean(),
      sopt_head: t.Boolean(),
      survey_responses: t.Boolean(),
      user_login_history: t.Boolean(),
      user_reading_progress: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const customeruserOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      authid: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      member_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      prefix: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      namesurname: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      email: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      tel: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      pdpa_accepted: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      pdpa_accepted_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      pdpa_version: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      gender: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      birthday: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      home_address_line1: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      home_address_line2: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      home_sub_district: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      home_district: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      home_province: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      home_postal_code: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      w1_address_line1: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      w1_address_line2: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      w1_sub_district: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      w1_district: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      w1_province: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      w1_postal_code: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      position: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      w1_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      status: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      note: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      Preferred_Contact_Channel: t.Union(
        [t.Literal("asc"), t.Literal("desc")],
        { additionalProperties: false },
      ),
      fcm_token: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      avatar_url: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      line_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      is_online: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      last_online: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      picprofile: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      wtel: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      gibthailink: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      biodesignlink: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      lableaderlink: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      aeclink: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      doctorcallink: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      miclink: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      log: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      department: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      knowform: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      referred_by: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      uninstalled_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      line_user_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      facebook_psid: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      source: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      tel2: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const customeruser = t.Composite(
  [customeruserPlain, customeruserRelations],
  { additionalProperties: false },
);

export const customeruserInputCreate = t.Composite(
  [customeruserPlainInputCreate, customeruserRelationsInputCreate],
  { additionalProperties: false },
);

export const customeruserInputUpdate = t.Composite(
  [customeruserPlainInputUpdate, customeruserRelationsInputUpdate],
  { additionalProperties: false },
);
