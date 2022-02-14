export const resolve = async (promise: Promise<any>) => {
  try {
    const result = await promise;

    return [result, null];
  } catch (error) {
    return [null, error];
  }
};
