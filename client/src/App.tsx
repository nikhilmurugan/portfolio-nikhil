import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import { RootLayout } from '@/layouts/root-layout'

const HomePage = lazy(() => import('@/pages/home').then((m) => ({ default: m.HomePage })))
const ResumePage = lazy(() => import('@/pages/resume').then((m) => ({ default: m.ResumePage })))
const ProjectDetailPage = lazy(() => import('@/pages/project-detail').then((m) => ({ default: m.ProjectDetailPage })))

function PageFallback() {
  return (
    <div className="grid min-h-[100svh] place-items-center text-sm tracking-[0.2em] text-zinc-500 uppercase font-mono">
      Loading
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<PageFallback />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: 'resume',
        element: (
          <Suspense fallback={<PageFallback />}>
            <ResumePage />
          </Suspense>
        ),
      },
      {
        path: 'projects/:projectId',
        element: (
          <Suspense fallback={<PageFallback />}>
            <ProjectDetailPage />
          </Suspense>
        ),
      },
      {
        path: 'about',
        element: <Navigate to="/#about" replace />,
      },
      {
        path: 'projects',
        element: <Navigate to="/#projects" replace />,
      },
      {
        path: 'contact',
        element: <Navigate to="/#contact" replace />,
      },
      {
        path: 'ai-lab',
        element: <Navigate to="/#innovation-hub" replace />,
      },
      {
        path: '*',
        element: <Navigate to="/" replace />,
      },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
