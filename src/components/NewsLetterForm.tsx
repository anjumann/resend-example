"use client"
import React, { useState } from 'react'

const NewsLetterForm = ({handleSendEmail}:{ handleSendEmail: (email: string) => Promise<void>}) => {


    const [email, setEmail] = useState<string>('')
    const [submitted, setSubmitted] = useState<boolean>(false)
    const [error, setError] = useState<string>('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        if (emailIsValid(email)) {
            setError('')
            await handleSendEmail(email)
            setSubmitted(true)
        } else {
            setError('Please enter a valid email address')
        }
        setLoading(false)
    }

    const emailIsValid = (email: string) => {
        // Basic email validation regex
        return /\S+@\S+\.\S+/.test(email)
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Subscribe to our Newsletter</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="example@email.com"
                        required />
                    {error && <p className="mt-2 text-sm text-red-600 dark:text-red-400">{error}</p>}
                </div>
                <button
                    type="submit"
                    className="w-full py-2.5 px-5 mb-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
                    disabled={loading}
                >Submit</button>
                {submitted && <p className="mt-2 text-sm text-green-700 dark:text-green-400">Thank you for subscribing!</p>}
            </form>
        </div>
    )
}

export default NewsLetterForm
