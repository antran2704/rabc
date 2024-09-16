import { defineAbility } from "@casl/ability";

const ability = defineAbility((can, cannot) => {
  can("update", "Post", { authorId: "1" });
});

export const setRules = (rules) => {
  return defineAbility((can, cannot) => {
    rules.map((rule) => can(rule.action, rule.subject));
    can("update", "Post", { authorId: "1" });
  });
};

export default ability;
