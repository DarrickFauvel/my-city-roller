'use client'
import DelayedComponent from "@/components/delayed-component";
import Die from "@/components/die";
import { useState } from "react";

export default function RollPage() {
    const [dieFaces, setDieFaces] = useState({
        "building-shape-die-left": null,
        "building-shape-die-right": null,
        "building-type-die": null,
    })

    return <div className="flex flex-col items-center gap-8 pt-16 pb-8">
        <div className="flex gap-2">
            <DelayedComponent timeoutValue={1000}>
                <Die
                    variant="building-shape"
                    side="left"
                    face={dieFaces["building-shape-die-left"]}
                />
            </DelayedComponent>

            <DelayedComponent timeoutValue={2000}>
                <Die
                    variant="building-shape"
                    side="right"
                    face={dieFaces["building-shape-die-right"]}
                />
            </DelayedComponent>
        </div>

        <DelayedComponent timeoutValue={3000}>
            <Die variant="building-type" face={dieFaces["building-type-die"]} />
        </DelayedComponent>
    </div>
}