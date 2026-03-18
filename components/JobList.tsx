import { getJobs } from "@/lib/jobs";

export default async function JobList({ limit = 6 }: { limit?: number }) {
  let jobs;
  try {
    jobs = await getJobs(limit);
  } catch {
    return <p className="text-red-400 text-xs">Could not load jobs.</p>;
  }

  if (jobs.length === 0) {
    return <p className="text-gray-400 text-xs">No job listings available right now.</p>;
  }

  return (
    <div className="flex flex-col gap-1.5">
      {jobs.map((job) => (
        <a
          key={job.link}
          href={`/jobs/${job.slug}`}
          className="bg-white rounded-lg border border-stone-200 hover:border-emerald-300 hover:shadow-sm transition-all p-2.5 flex items-start justify-between gap-2"
        >
          <div className="flex-1 min-w-0">
            <h3 className="text-xs font-semibold text-gray-800 leading-snug truncate">{job.title}</h3>
            <p className="text-[10px] text-gray-400 mt-0.5 truncate">
              {job.company}{job.location ? ` · ${job.location}` : ""}
            </p>
          </div>
          <span className="shrink-0 text-[10px] font-medium text-emerald-700 bg-emerald-50 border border-emerald-100 px-1.5 py-0.5 rounded-full">
            {job.source}
          </span>
        </a>
      ))}
    </div>
  );
}
