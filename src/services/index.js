export const DelayTimeOut = (ms) => new Promise((res) => setTimeout(res, ms));

export const FetchData = async () => {
  try {
    const res = await fetch(`http://localhost:3001/files/data`);
    const resJson = await res.json();
    return {
      error: false,
      data: resJson,
    };
  } catch (error) {
    return {
      error: true,
      data: null,
    };
  }
};