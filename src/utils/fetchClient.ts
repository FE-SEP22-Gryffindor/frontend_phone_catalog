const BASE_URL
  // eslint-disable-next-line max-len
  // = 'https://deploy-preview-3--stupendous-douhua-9a8b1c.netlify.app/.netlify/functions/server/';
  = 'http://localhost:9000/.netlify/functions/server';

// To have autocompletion and avoid mistypes
type RequestMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';

function request<T>(
  url: string,
  countHeader: string,
  method: RequestMethod = 'GET',
  // eslint-disable-next-line
  data: any = null, // we can send any data to the server
): Promise<{ serverItemsCount: string | null; items: Promise<T> }> {
  const options: RequestInit = { method };

  if (data) {
    // We add body and Content-Type only for the requests with data
    options.body = JSON.stringify(data);

    options.headers = {
      'Content-Type': 'application/json; charset=UTF-8',
    };
  }

  return Promise.resolve()
    .then(() => fetch(BASE_URL + url, options))
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }

      return {
        serverItemsCount: response.headers.get(countHeader),
        items: response.json(),
      };
    });
}

export const client = {
  get: <T>(url: string, countHeader: string) => request<T>(url, countHeader),
  // // eslint-disable-next-line
  // post: <T>(url: string, data: any) => request<T>(url, 'POST', data),
  // // eslint-disable-next-line
  // patch: <T>(url: string, data: any) => request<T>(url, 'PATCH', data),
  // delete: (url: string) => request(url, 'DELETE'),
};
