import React from "react"
import { getCurrentUser } from "@/lib/actions/auth.action"
import {
    getFeedbackByInterviewId,
    getInterviewById,
} from "@/lib/actions/general.action"
import { redirect } from "next/navigation"

const Page = async ({ params }: RouteParams) => {
    const { id } = params
    const user = await getCurrentUser()

    const interview = await getInterviewById(id)
    if (!interview) redirect("/")

    const feedback = await getFeedbackByInterviewId({
        interviewId: id,
        userId: user?.id!,
    })

    console.log(feedback)
    return <div></div>
}

export default Page
