const fetchFactory = (method) => {
  let controller;

  return async (url, payload = null) => {
    controller && controller.abort();
    controller = new AbortController();

    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: payload ? JSON.stringify(payload) : undefined,
      signal: controller.signal,
    });

    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

    return await response.json();
  };
};

export const get = fetchFactory("GET");
export const post = fetchFactory("POST");
export const patch = fetchFactory("PATCH");
