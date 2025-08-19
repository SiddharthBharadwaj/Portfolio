import { Shield } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6 py-6">
        <p className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Siddharth Bharadwaj. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

