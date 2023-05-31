type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

function expect(expectVal: any): ToBeOrNotToBe {
  const result: ToBeOrNotToBe = {
    toBe: function (val: any): boolean {
      if (expectVal === val) {
        return true;
      }

      throw "Not Equal";
    },
    notToBe: function (val: any): boolean {
      if (expectVal !== val) {
        return true;
      }

      throw "Equal";
    }
  };

  return result;
}

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

export {};
