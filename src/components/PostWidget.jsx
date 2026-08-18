import React, { useState } from 'react';
import { useFetch } from '../hooks/useFetch';

export default function PostWidget() {
  const [postId, setPostId] = useState(1);

  // Consume Custom Hook (Fetch + Cleanup + States)
  const { data: post, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );

  return (
    <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold">JSONPlaceholder Post Viewer</h3>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300">
          Task 2.3
        </span>
      </div>

      {/* Dynamic Controls */}
      <div className="flex items-center gap-3 mb-4">
        <button
          onClick={() => setPostId((prev) => Math.max(1, prev - 1))}
          disabled={postId <= 1 || loading}
          className="px-4 py-2 text-sm font-medium rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Previous
        </button>
        <span className="font-semibold text-sm">Post ID: {postId}</span>
        <button
          onClick={() => setPostId((prev) => prev + 1)}
          disabled={loading}
          className="px-4 py-2 text-sm font-medium rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Next
        </button>
      </div>

      <hr className="border-slate-200 dark:border-slate-800 my-4" />

      {/* Conditional UI Rendering */}
      {loading && <p className="text-slate-500 dark:text-slate-400">Fetching post data...</p>}

      {error && !loading && (
        <p className="text-red-500 font-medium">Error: {error}</p>
      )}

      {!loading && !error && post && (
        <div>
          <h4 className="font-bold text-base capitalize text-slate-900 dark:text-white mb-2">
            {post.title}
          </h4>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {post.body}
          </p>
        </div>
      )}
    </div>
  );
}