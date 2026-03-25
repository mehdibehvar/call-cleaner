const NextJsPowerPoint = () => {
  return (
    <div className="container border-2 border-gray-300 rounded-md p-4">
      <main className="space-y-4">
        <div className="bg-gray-100  border-2 border-gray-300 rounded-md p-4">
          <h1 className="py-2 pl-4 text-2xl font-bold font-sans relative before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-3 before:bg-yellow-300">
            Why Cache in Next.js?
          </h1>
          <div className="h-1 bg-yellow-300 w-full"></div>
          <div className="text-xl p-2">
            <ul className="flex flex-col gap-4 *:bg-gray-200">
              <li className="list-outside list-disc whitespace-normal">
                Speed: The main reason! Fetching data from an API every single
                time a user visits a page or performs an action can be slow.
                Caching means you serve data from a local copy instead of making
                a network request, which is way faster.
              </li>
              <li className="">
                {" "}
                🚀 Reduced Server Load: Less fetching means fewer requests
                hitting your API or backend, which saves resources and prevents
                your server from getting overloaded.
              </li>
              <li className="">
                {" "}
                Offline Support (sometimes): With certain caching strategies,
                users might even be able to access data even if they briefly
                lose their internet connection.
              </li>
            </ul>
          </div>
        </div>
        <div className="space-y-4 size-full [&amp;&gt;*:first-child]:mt-0 [&amp;&gt;*:last-child]:mb-0">
          <p>
            Ah, good question! Passing cache options to{" "}
            <code
              className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm"
              data-streamdown="inline-code"
            >
              fetch
            </code>{" "}
            in Next.js is all about{" "}
            <span className="font-semibold" data-streamdown="strong">
              controlling how your application handles data caching
            </span>
            . It's a big deal for performance and user experience.
          </p>
          <p>Here's the lowdown:</p>
          <h3
            className="mt-6 mb-2 font-semibold text-xl"
            data-streamdown="heading-3"
          >
            Why Cache in Next.js?
          </h3>
          <ul
            className="ml-4 list-outside list-disc whitespace-normal"
            data-streamdown="unordered-list"
          >
            <li className="py-1" data-streamdown="list-item">
              <span className="font-semibold" data-streamdown="strong">
                Speed:
              </span>{" "}
              The main reason! Fetching data from an API every single time a
              user visits a page or performs an action can be slow. Caching
              means you serve data from a local copy instead of making a network
              request, which is way faster. 🚀
            </li>
            <li className="py-1" data-streamdown="list-item">
              <span className="font-semibold" data-streamdown="strong">
                Reduced Server Load:
              </span>{" "}
              Less fetching means fewer requests hitting your API or backend,
              which saves resources and prevents your server from getting
              overloaded.
            </li>
            <li className="py-1" data-streamdown="list-item">
              <span className="font-semibold" data-streamdown="strong">
                Offline Support (sometimes):
              </span>{" "}
              With certain caching strategies, users might even be able to
              access data even if they briefly lose their internet connection.
            </li>
          </ul>
          <h3
            className="mt-6 mb-2 font-semibold text-xl"
            data-streamdown="heading-3"
          >
            How{" "}
            <code
              className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm"
              data-streamdown="inline-code"
            >
              fetch
            </code>{" "}
            and{" "}
            <code
              className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm"
              data-streamdown="inline-code"
            >
              next
            </code>{" "}
            Options Work Together
          </h3>
          <p>
            Next.js enhances the native{" "}
            <code
              className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm"
              data-streamdown="inline-code"
            >
              fetch
            </code>{" "}
            API to give you more control over caching. When you add options to{" "}
            <code
              className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm"
              data-streamdown="inline-code"
            >
              fetch
            </code>{" "}
            (often within the{" "}
            <code
              className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm"
              data-streamdown="inline-code"
            >
              next
            </code>{" "}
            property of the options object), you're telling Next.js how to
            manage the data lifecycle.
          </p>
          <p>
            Here are the key caching options you'll commonly see (and that{" "}
            <code
              className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm"
              data-streamdown="inline-code"
            >
              getCacheOptions
            </code>{" "}
            might be configuring):
          </p>
          <ul
            className="ml-4 list-outside list-disc whitespace-normal"
            data-streamdown="unordered-list"
          >
            <li className="py-1" data-streamdown="list-item">
              <span className="font-semibold" data-streamdown="strong">
                <code
                  className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm"
                  data-streamdown="inline-code"
                >
                  cache: 'force-cache'
                </code>
              </span>
              : (As seen in your example) This is the default. It tells Next.js
              to cache the data and only revalidate it when it's absolutely
              necessary (like during a re-deploy or if explicitly revalidated).
              It's great for static content that doesn't change often.
            </li>
            <li className="py-1" data-streamdown="list-item">
              <span className="font-semibold" data-streamdown="strong">
                <code
                  className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm"
                  data-streamdown="inline-code"
                >
                  cache: 'no-store'
                </code>
              </span>
              : This tells Next.js{" "}
              <span className="font-semibold" data-streamdown="strong">
                not
              </span>{" "}
              to cache the data at all. Every request will go directly to the
              source. Use this for highly dynamic data that must always be
              fresh, like real-time stock prices or user-specific dashboards.
            </li>
            <li className="py-1" data-streamdown="list-item">
              <span className="font-semibold" data-streamdown="strong">
                <code
                  className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm"
                  data-streamdown="inline-code"
                >
                  next: //{"{revalidate: seconds}"}//{" "}
                </code>
              </span>
              : This is super useful! It tells Next.js to cache the data for a
              specified number of{" "}
              <code
                className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm"
                data-streamdown="inline-code"
              >
                seconds
              </code>
              . After that time, the data is considered stale, and Next.js will
              re-fetch it on the next request. For example,{" "}
              <code
                className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm"
                data-streamdown="inline-code"
              >
                next: {"revalidate: 60"}
              </code>{" "}
              means re-fetch every minute. This is called{" "}
              <span className="font-semibold" data-streamdown="strong">
                Incremental Static Regeneration (ISR)
              </span>
              .
            </li>
          </ul>
          <h3
            className="mt-6 mb-2 font-semibold text-xl"
            data-streamdown="heading-3"
          >
            What{" "}
            <code
              className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm"
              data-streamdown="inline-code"
            >
              getCacheOptions
            </code>{" "}
            Might Be Doing
          </h3>
          <p>
            In your example,{" "}
            <code
              className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm"
              data-streamdown="inline-code"
            >
              const next = {" ...(await getCacheOptions(customers)), "}
            </code>
            , the{" "}
            <code
              className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm"
              data-streamdown="inline-code"
            >
              getCacheOptions("customers")
            </code>{" "}
            function is likely doing one of these things:
          </p>
          <ul
            className="ml-4 list-outside list-disc whitespace-normal"
            data-streamdown="unordered-list"
          >
            <li className="py-1" data-streamdown="list-item">
              <span className="font-semibold" data-streamdown="strong">
                Returning predefined cache settings
              </span>
              : Maybe for "customers," it's always set to revalidate every hour
              (
              <code
                className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm"
                data-streamdown="inline-code"
              >
                {"revalidate: 3600"}
              </code>
              ).
            </li>
            <li className="py-1" data-streamdown="list-item">
              <span className="font-semibold" data-streamdown="strong">
                Dynamically determining settings
              </span>
              : It might look at the data itself or other factors to decide on a
              caching strategy.
            </li>
            <li className="py-1" data-streamdown="list-item">
              <span className="font-semibold" data-streamdown="strong">
                Abstracting away complexity
              </span>
              : It could be a helper function that makes it easier to manage
              caching configurations across different parts of your app.
            </li>
          </ul>
          <h3
            className="mt-6 mb-2 font-semibold text-xl"
            data-streamdown="heading-3"
          >
            In a Nutshell
          </h3>
          <p>
            Passing cache options to{" "}
            <code
              className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm"
              data-streamdown="inline-code"
            >
              fetch
            </code>{" "}
            in Next.js is{" "}
            <span className="font-semibold" data-streamdown="strong">
              essential for optimizing your application's performance and
              controlling data freshness
            </span>
            . It allows you to balance speed with ensuring users see up-to-date
            information, making your app feel snappier and more efficient. 😊
          </p>
        </div>
      </main>
    </div>
  );
};

export default NextJsPowerPoint;
