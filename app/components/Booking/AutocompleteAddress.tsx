function AutocompleteAddress() {
    return (
        <div className="mt-5">
            <div>
                <label  className="text-gray-400">Where from?</label>
                <input
                    type="text"
                    className="bg-white p-1 border-[1px] w-full rounded-md outline-none focus:bg-yellow-300"
                />
            </div>

            <div className="mt-3">
                <label className="text-gray-400">Where To?</label>
                <input
                    type="text"
                    className="bg-white p-1 border-[1px] w-full rounded-md outline-none focus:bg-yellow-300"
                />
            </div>
        </div>
    );
}

export default AutocompleteAddress;
