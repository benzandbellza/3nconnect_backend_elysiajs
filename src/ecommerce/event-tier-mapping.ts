type EventTierFields = {
  tier_preregister: string;
  tier_register: string;
};

export const mapEventTierFields = ({
  tier_preregister,
  tier_register,
}: EventTierFields) => ({
  tierpreregister: tier_preregister,
  tierregister: tier_register,
});
