import React from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

const NewsLetter = () => {
  return (
    <section className="relative bg-slate-900 text-white py-10 rounded-sm overflow-hidden">
      {/* Decorative accents */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-red-500 opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-red-500 opacity-10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />
      {/* Top red bar accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-red-500 rounded-full" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <span className="inline-flex items-center gap-1.5 bg-red-500/15 text-red-400 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full border border-red-500/20 mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse inline-block" />
          Newsletter
        </span>

        <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
          Stay <span className="text-red-500">Updated</span>
        </h2>

        <p className="mt-4 text-slate-400 text-base max-w-md mx-auto leading-relaxed">
          Subscribe to our newsletter and get the latest updates delivered
          directly to your inbox.
        </p>

        {/* Subscription Form */}
        <form className="mt-8 sm:max-w-sm mx-auto sm:flex sm:justify-center">
          <div className="flex-1 sm:flex-shrink-0">
            <Input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-64 bg-slate-800 border-slate-600 text-white placeholder:text-slate-500 focus-visible:ring-red-500 focus-visible:border-red-500 rounded-lg"
              required
            />
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-3">
            <Button className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white font-semibold px-6 rounded-lg transition-colors duration-200">
              Subscribe
            </Button>
          </div>
        </form>

        <p className="mt-4 text-slate-600 text-xs">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  )
}

export default NewsLetter