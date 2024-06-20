"use client"
import React, { useEffect, useState } from "react"

type DelayedComponentProps = {
  timeoutValue: number
  children: React.ReactNode
}

export default function DelayedComponent({
  timeoutValue,
  children,
}: DelayedComponentProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, timeoutValue)

    return () => clearTimeout(timer)
  }, [timeoutValue])

  return (
    <div>
      {isLoading ? (
        <div className="w-full h-full flex justify-center items-center">
          <svg
            className="scale-[250%]"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
              transform="matrix(0 0 0 0 12 12)">
              <animateTransform
                attributeName="transform"
                calcMode="spline"
                dur="1.2s"
                keySplines=".52,.6,.25,.99"
                repeatCount="indefinite"
                type="translate"
                values="12 12;0 0"
              />
              <animateTransform
                additive="sum"
                attributeName="transform"
                calcMode="spline"
                dur="1.2s"
                keySplines=".52,.6,.25,.99"
                repeatCount="indefinite"
                type="scale"
                values="0;1"
              />
              <animate
                attributeName="opacity"
                calcMode="spline"
                dur="1.2s"
                keySplines=".52,.6,.25,.99"
                repeatCount="indefinite"
                values="1;0"
              />
            </path>
          </svg>
        </div>
      ) : (
        children
      )}
    </div>
  )
}
