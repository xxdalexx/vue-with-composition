import { ref, watch } from "vue";

export function useStorage(key, defaultValue = "") {
  let storedValue = localStorage.getItem(key);
  let value;

  if (storedValue) {
    value = ref(storedValue);
  } else {
    value = ref(defaultValue);
    write();
  }

  watch(value, write);

  function write() {
    if (value.value === "") {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, value.value);
    }
  }

  return value;
}
