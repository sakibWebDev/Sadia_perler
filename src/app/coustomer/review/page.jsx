"use client";

const Page = () => {
    const handleReview = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const companyName = form.company.value;
        const description = form.describe.value;

        const review = {
            name,
            companyName,
            description,
        };

        try {
            const resp = await fetch("/coustomer/review/api/writedreview", {
                method: "POST",
                body: JSON.stringify(review),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (resp.ok) {
                alert("Successfully added!");
                form.reset(); // Reset the form after successful submission
            } else {
                const errorData = await resp.json();
                alert(`Error: ${errorData.message || "Failed to add review."}`);
            }
        } catch (error) {
            console.error("Fetch error:", error);
            alert("Something went wrong. Please try again later.");
        }
    };

    return (
        <div className="m-8">
            <div className="flex justify-between items-center">
                <p className="text-2xl font-bold">Review</p>
                <p className="text-2xl font-bold">Pro Rasel</p>
            </div>

            <form onSubmit={handleReview} className="space-y-6 mt-6">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="input input-bordered w-2/4"
                />
                <input
                    type="text"
                    name="company"
                    placeholder="Company’s name, Designation"
                    className="input input-bordered w-2/4"
                />
                <textarea
                    name="describe"
                    className="textarea textarea-bordered w-2/4"
                    placeholder="Description"
                ></textarea>
                <button
                    type="submit"
                    className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-2xl px-5 py-2.5 text-center"
                >
                    Submit Review
                </button>
            </form>
        </div>
    );
};

export default Page;
