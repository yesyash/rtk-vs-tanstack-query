import { Link } from "react-router"

export const Homepage = () => {
    return (
        <div className="p-6">
            <h1 className="pb-6 text-3xl font-semibold">Rtk VS Tanstack Query + Zustand</h1>

            <div className="flex flex-col">
                <h3 className="pb-2 text-xl font-semibold">Go to:</h3>

                <ul className="list-inside list-disc">
                    <li>
                        <Link to="/rtk" className="text-blue-600 hover:underline">Rtk Query</Link>
                    </li>
                    <li>
                        <Link to="/tanstack-query-zustand" className="text-blue-600 hover:underline">Tanstack Query + Zustand</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}