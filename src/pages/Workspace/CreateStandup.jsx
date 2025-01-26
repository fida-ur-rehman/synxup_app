import React, { useState } from "react";
import Header from "../../components/Header/Header";
import TextEditor from "../../components/Fields/TextEditor";

const CreateStandup = () => {
    const [members, setMembers] = useState(["Cesar Scot", "alex.stb@gmail.com (External)", "AXTEN alpha Group", "Peter Stark", "Mark Darwin"]);
    const [observers, setObservers] = useState([]);
    const [statusTypes, setStatusTypes] = useState(["Worked On", "Working On", "Blocker"]);
    const [taskTypes, setTaskTypes] = useState(["Task", "Bug", "Story"]);
    const [priorities, setPriorities] = useState(["High", "Medium", "Low"]);
    const [taskStatuses, setTaskStatuses] = useState(["New", "In-Progress", "Done"]);
    const [tags, setTags] = useState([]);
    const [permissions, setPermissions] = useState("All");

    const handleAdd = (setter, value) => {
        if (value) setter((prev) => [...prev, value]);
    };

    const handleRemove = (setter, value) => {
        setter((prev) => prev.filter((item) => item !== value));
    };


    const [description, setDescription] = useState("");


    return (
        <div className=" bg-gray-50 min-h-screen">
            <div className="bg-white shadow-md rounded-lg p-8">
                {/* Header */}

                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-semibold">Create Standup</h1>
                    <div className="flex gap-4">
                        <button className="text-gray-600 hover:text-gray-900">Cancel</button>
                        <button className="bg-indigo-500 text-white font-medium py-2 px-6 rounded-md hover:bg-indigo-600">Create</button>
                    </div>
                </div>

                {/* Date and Time Zone */}
                <div className="mb-6">
                    <p className="text-gray-500 text-sm">March 06, 2024 IST</p>
                    <select className="border border-gray-300 rounded-md p-2 text-gray-700 text-sm mt-2">
                        <option>Select Time Zone</option>
                    </select>
                </div>

                {/* Standup Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <input
                        type="text"
                        placeholder="Standup Title"
                        className="border border-gray-300 rounded-md p-3 w-full"
                    />
                    <input
                        type="text"
                        placeholder="Team Name"
                        className="border border-gray-300 rounded-md p-3 w-full"
                    />
                </div>
                <TextEditor
                    value={description}
                    onChange={setDescription}
                    placeholder="Describe your standup..."
                    theme="snow"
                    className="w-full  rounded-md mb-6"
                />

                {/* Add Members */}
                <section className="mb-6">
                    <h2 className="text-lg font-semibold mb-4">Add Members</h2>
                    <div className="flex items-center gap-3 mb-4">
                        <input
                            type="text"
                            placeholder="Search Members (email or name)"
                            className=" border border-gray-300 rounded-md p-3 flex-grow"
                        />
                        <button
                            onClick={() => handleAdd(setMembers, "New Member")}
                            className="bg-indigo-500 text-white font-medium py-2 px-6 rounded-md hover:bg-indigo-600"
                        >
                            Add
                        </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {members.map((member) => (
                            <span
                                key={member}
                                className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full flex items-center gap-2"
                            >
                                {member}
                                <button
                                    onClick={() => handleRemove(setMembers, member)}
                                    className="text-indigo-600 hover:text-indigo-900"
                                >
                                    &times;
                                </button>
                            </span>
                        ))}
                    </div>
                </section>

                {/* Add Observer Members */}
                <section className="mb-6">
                    <h2 className="text-lg font-semibold mb-4">Add Observer Members</h2>
                    <div className="flex items-center gap-3 mb-4">
                        <input
                            type="text"
                            placeholder="Search Members (email or name)"
                            className="border border-gray-300 rounded-md p-3 flex-grow"
                        />
                        <button
                            onClick={() => handleAdd(setObservers, "New Observer")}
                            className="bg-indigo-500 text-white font-medium py-2 px-6 rounded-md hover:bg-indigo-600"
                        >
                            Add Observer
                        </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {observers.map((observer) => (
                            <span
                                key={observer}
                                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full flex items-center gap-2"
                            >
                                {observer}
                                <button
                                    onClick={() => handleRemove(setObservers, observer)}
                                    className="text-gray-700 hover:text-gray-900"
                                >
                                    &times;
                                </button>
                            </span>
                        ))}
                    </div>
                </section>

                {/* Set Occurrence */}
                <section className="mb-6">
                    <h2 className="text-lg font-semibold mb-4">Set Occurrence</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <input type="date" className="border border-gray-300 rounded-md p-3" />
                        <input type="date" className="border border-gray-300 rounded-md p-3" />
                        <div className="flex items-center gap-3">
                            <select className="border border-gray-300 rounded-md p-3 flex-grow">
                                <option>Every</option>
                            </select>
                            <input type="number" className="border border-gray-300 rounded-md p-3 w-20" />
                            <select className="border border-gray-300 rounded-md p-3 flex-grow">
                                <option>Day</option>
                            </select>
                        </div>
                    </div>
                </section>

                {/* Set Status Type */}
                <section className="mb-6">
                    <h2 className="text-lg font-semibold mb-4">Set Status Type</h2>
                    <div className="flex items-center gap-3 mb-4">
                        <input
                            type="text"
                            placeholder="Create Status Type"
                            className="border border-gray-300 rounded-md p-3 flex-grow"
                        />
                        <button
                            onClick={() => handleAdd(setStatusTypes, "New Status")}
                            className="bg-indigo-500 text-white font-medium py-2 px-6 rounded-md hover:bg-indigo-600"
                        >
                            Add
                        </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {statusTypes.map((status) => (
                            <span
                                key={status}
                                className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full flex items-center gap-2"
                            >
                                {status}
                                <button
                                    onClick={() => handleRemove(setStatusTypes, status)}
                                    className="text-indigo-600 hover:text-indigo-900"
                                >
                                    &times;
                                </button>
                            </span>
                        ))}
                    </div>
                </section>

                {/* Set Task Options */}
                <section className="mb-6">
                    <h2 className="text-lg font-semibold mb-4">Set Task Options</h2>
                    {/* Task Types */}
                    <div className="mb-4">
                        <h3 className="text-sm font-semibold">Create Task Type</h3>
                        <div className="flex items-center gap-3 mt-2">
                            <input
                                type="text"
                                placeholder="Task Type"
                                className="border border-gray-300 rounded-md p-3 flex-grow"
                            />
                            <button
                                onClick={() => handleAdd(setTaskTypes, "New Task")}
                                className="bg-indigo-500 text-white font-medium py-2 px-6 rounded-md hover:bg-indigo-600"
                            >
                                Add
                            </button>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {taskTypes.map((type) => (
                                <span
                                    key={type}
                                    className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full flex items-center gap-2"
                                >
                                    {type}
                                    <button
                                        onClick={() => handleRemove(setTaskTypes, type)}
                                        className="text-indigo-600 hover:text-indigo-900"
                                    >
                                        &times;
                                    </button>
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Priority */}
                    <div className="mb-4">
                        <h3 className="text-sm font-semibold">Create Priority</h3>
                        <div className="flex items-center gap-3 mt-2">
                            <input
                                type="text"
                                placeholder="Priority"
                                className="border border-gray-300 rounded-md p-3 flex-grow"
                            />
                            <button
                                onClick={() => handleAdd(setPriorities, "New Priority")}
                                className="bg-indigo-500 text-white font-medium py-2 px-6 rounded-md hover:bg-indigo-600"
                            >
                                Add
                            </button>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {priorities.map((priority) => (
                                <span
                                    key={priority}
                                    className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full flex items-center gap-2"
                                >
                                    {priority}
                                    <button
                                        onClick={() => handleRemove(setPriorities, priority)}
                                        className="text-indigo-600 hover:text-indigo-900"
                                    >
                                        &times;
                                    </button>
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Task Status */}
                    <div className="mb-4">
                        <h3 className="text-sm font-semibold">Create Task Status</h3>
                        <div className="flex items-center gap-3 mt-2">
                            <input
                                type="text"
                                placeholder="Task Status"
                                className="border border-gray-300 rounded-md p-3 flex-grow"
                            />
                            <button
                                onClick={() => handleAdd(setTaskStatuses, "New Status")}
                                className="bg-indigo-500 text-white font-medium py-2 px-6 rounded-md hover:bg-indigo-600"
                            >
                                Add
                            </button>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {taskStatuses.map((status) => (
                                <span
                                    key={status}
                                    className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full flex items-center gap-2"
                                >
                                    {status}
                                    <button
                                        onClick={() => handleRemove(setTaskStatuses, status)}
                                        className="text-indigo-600 hover:text-indigo-900"
                                    >
                                        &times;
                                    </button>
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Set Permissions */}
                <section className="mb-6">
                    <h2 className="text-lg font-semibold mb-4">Set Permission</h2>
                    <div className="flex flex-col gap-3">
                        <label className="flex items-center gap-3">
                            <input
                                type="radio"
                                name="permissions"
                                value="Observers"
                                checked={permissions === "Observers"}
                                onChange={(e) => setPermissions(e.target.value)}
                            />
                            Observers
                        </label>
                        <label className="flex items-center gap-3">
                            <input
                                type="radio"
                                name="permissions"
                                value="Members Excluding Observers"
                                checked={permissions === "Members Excluding Observers"}
                                onChange={(e) => setPermissions(e.target.value)}
                            />
                            Members Excluding Observers
                        </label>
                        <label className="flex items-center gap-3">
                            <input
                                type="radio"
                                name="permissions"
                                value="All"
                                checked={permissions === "All"}
                                onChange={(e) => setPermissions(e.target.value)}
                            />
                            All
                        </label>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CreateStandup;
