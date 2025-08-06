export default function Form() {
  return (
    <div className="my-6 text-left space-y-4">
      <label className="block">
        <span className="after:content-['*'] text-left after:ml-0.5 after:text-danger-500 block text-sm font-medium text-neutral-700">
          Full Name
        </span>
        <input
          type="text"
          name="name"
          className="mt-1 px-4 py-3 bg-white border shadow-sm border-neutral-300 placeholder-slate-400 focus:outline-none focus:border-alternative-500 focus:ring-alternative-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="Your name"
        />
      </label>
      <label className="block">
        <span className="after:content-['*'] text-left after:ml-0.5 after:text-danger-500 block text-sm font-medium text-neutral-700">
          Email
        </span>
        <input
          type="email"
          name="email"
          className="mt-1 px-4 py-3 bg-white border shadow-sm border-neutral-300 placeholder-slate-400 focus:outline-none focus:border-alternative-500 focus:ring-alternative-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="name@example.com"
        />
      </label>
      <label className="block">
        <span className="after:content-['*'] text-left after:ml-0.5 after:text-danger-500 block text-sm font-medium text-neutral-700">
          Subject
        </span>
        <input
          type="text"
          name="Subject"
          className="mt-1 px-4 py-3 bg-white border shadow-sm border-neutral-300 placeholder-slate-400 focus:outline-none focus:border-alternative-500 focus:ring-alternative-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="Subject"
        />
      </label>
      <label className="block">
        <span className="after:content-['*'] text-left after:ml-0.5 after:text-danger-500 block text-sm font-medium text-neutral-700">
          Message
        </span>
        <textarea
          rows="6"
          name="Message"
          className="mt-1 px-4 py-3 bg-white border shadow-sm border-neutral-300 placeholder-slate-400 focus:outline-none focus:border-alternative-500 focus:ring-alternative-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="Enter your message"
        ></textarea>
      </label>
      <button className="rounded-md bg-primary-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">
        Submit
      </button>
      <div></div>
    </div>
  );
}
