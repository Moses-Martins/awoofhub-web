export default function TableHeader() {
  return (
    <thead>
      <tr className="text-[11px] uppercase tracking-wider whitespace-nowrap bg-gray-100 text-gray-600 border-y border-gray-200">
        <th className="px-3 py-4 font-bold">Title</th>
        <th className="px-3 py-4 text-center font-bold">Category</th>
        <th className="px-3 py-4 font-bold">Date Created</th>
        <th className="px-3 py-4 text-center font-bold">Rating</th>
        <th className="px-3 py-4 font-bold">Reviews</th>
        <th className="px-3 py-4 text-center font-bold">Ends In</th>
        <th className="px-3 py-4 text-center font-bold">Status</th>
        <th className="px-3 py-4 text-center font-bold">Expiry Status</th>
        <th className="px-3 py-4 text-center font-bold">Actions</th>
      </tr>
    </thead>
  );
}