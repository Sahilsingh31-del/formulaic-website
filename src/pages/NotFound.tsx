import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="relative flex min-h-[70vh] w-full flex-col items-center justify-center overflow-hidden bg-white px-6 py-24 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(185,28,28,0.06),transparent_35%),radial-gradient(circle_at_70%_70%,rgba(239,68,68,0.05),transparent_35%)]" />
      <motion.div
        className="absolute h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"
        animate={{ scale: [1, 1.3, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="relative z-10">
        <motion.div
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-50"
        >
          <Compass className="h-10 w-10 text-blue-600" />
        </motion.div>
        <motion.h1
          className="mb-4 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-800 bg-clip-text font-serif text-8xl font-bold text-transparent md:text-9xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          404
        </motion.h1>
        <motion.p
          className="mb-10 text-lg text-slate-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          This page seems to have been revalued and relocated.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Link
            to="/"
            className="group inline-flex items-center rounded-full bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-600/30 transition-colors hover:bg-blue-500"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
