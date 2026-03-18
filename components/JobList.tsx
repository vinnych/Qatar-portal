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
          className="bg-white rounded-xl border border-stone-200 hover:border-stone-300 hover:shadow-md transition-all duration-200 p-3 flex items-center justify-between gap-3 group"
        >
          <div className="flex-1 min-w-0">
            <h3 className="text-xs font-semibold text-gray-800 leading-snug truncate group-hover:text-gray-900">{job.title}</h3>
            <p className="text-[10px] text-gray-400 mt-0.5 truncate">
              {job.company}{job.location ? ` · ${job.location}` : ""}
            </p>
          </div>
          <span className="shrink-0 text-[9px] font-bold text-emerald-700 uppercase tracking-wide">
            {job.source}
          </span>
        </a>
      ))}
    </div>
  );
}
