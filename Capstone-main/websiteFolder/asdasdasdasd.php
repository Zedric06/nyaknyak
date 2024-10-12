<div class="container">
        <h1>Food Inspection Tracker</h1>
        <form id="inspection-form">
            <input type="text" id="food-item" placeholder="Food Item" required>
            <input type="date" id="inspection-date" required>
            <select id="inspection-status" required>
                <option value="">Select Status</option>
                <option value="Pass">Pass</option>
                <option value="Fail">Fail</option>
                <option value="Pending">Pending</option>
            </select>
            <button type="submit">Add Inspection</button>
        </form>
        <ul id="inspection-list"></ul>
    </div>
