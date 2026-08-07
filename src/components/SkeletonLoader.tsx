"use client"

import type React from "react"

import { motion } from "framer-motion"

interface SkeletonLoaderProps {
  className?: string
  variant?: "text" | "circular" | "rectangular"
  width?: string | number
  height?: string | number
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ className = "", variant = "rectangular", width, height }) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "text":
        return "h-4 rounded"
      case "circular":
        return "rounded-full"
      case "rectangular":
        return "rounded-lg"
      default:
        return "rounded-lg"
    }
  }

  const style = {
    width: width || "100%",
    height: height || (variant === "text" ? "1rem" : "auto"),
  }

  return (
    <motion.div
      className={`bg-gray-700 ${getVariantClasses()} ${className}`}
      style={style}
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
    />
  )
}

export default SkeletonLoader
