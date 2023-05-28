export const useFormRules = () => {
  const ruleRequired = ref([
    (value: string) => {
      if (value) return true;
      return "You must enter";
    },
  ]);
  return { ruleRequired }
}
