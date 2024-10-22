const data = [
    // Room
    { particular: "General Room", chargeHead: "Hospital Charges", billFor: "Room Rent" },
    { particular: "Single Room", chargeHead: "Hospital Charges", billFor: "Room Rent" },
    { particular: "Private Room", chargeHead: "Hospital Charges", billFor: "Room Rent" },
    { particular: "Special Room", chargeHead: "Hospital Charges", billFor: "Room Rent" },
    { particular: "Deluxe Room", chargeHead: "Hospital Charges", billFor: "Room Rent" },
    
    // Icu Room
    { particular: "Medical intensive care unit(Micu) Room", chargeHead: "Hospital Charges", billFor: "ICU Charges" },
    { particular: "Neonatal intensive care unit (Nicu) Room", chargeHead: "Hospital Charges", billFor: "ICU Charges" },
    { particular: "Surgical intensive care unit (Sicu) Room", chargeHead: "Hospital Charges", billFor: "ICU Charges" },
    { particular: "High dependency unit(Hdu)", chargeHead: "Hospital Charges", billFor: "ICU Charges" },
    { particular: "Intensve care unit(Icu)", chargeHead: "Hospital Charges", billFor: "ICU Charges" },
    
    // Nursing
    { particular: "General Nursing", chargeHead: "Hospital Charges", billFor: "Nursing" },
    { particular: "Single Nursing", chargeHead: "Hospital Charges", billFor: "Nursing" },
    { particular: "Private Nursing", chargeHead: "Hospital Charges", billFor: "Nursing" },
    { particular: "Special Nursing", chargeHead: "Hospital Charges", billFor: "Nursing" },
    { particular: "Deluxe Nursing", chargeHead: "Hospital Charges", billFor: "Nursing" },
    
    // Icu Nursing
    { particular: "Micu Nursing", chargeHead: "Hospital Charges", billFor: "ICU Nursing Charges" },
    { particular: "Nicu Nursing", chargeHead: "Hospital Charges", billFor: "ICU Nursing Charges" },
    { particular: "Sicu Nursing", chargeHead: "Hospital Charges", billFor: "ICU Nursing Charges" },
    { particular: "Icu, Hdu Nursing", chargeHead: "Hospital Charges", billFor: "ICU Nursing Charges" },
    
    // Consultation
    { particular: "Consultation", chargeHead: "Consultant Charges", billFor: "Consultation / Visit" },
    { particular: "Icu Conultation", chargeHead: "Consultant Charges", billFor: "ICU Consultant" },
    { particular: "Hdu,Sicu,Micu consultation", chargeHead: "Consultant Charges", billFor: "ICU Consultant" },
    { particular: "Intensivisit", chargeHead: "Consultant Charges", billFor: "Intensivisit Charges" },
    { particular: "Dmo,Jmo", chargeHead: "Consultant Charges", billFor: "Consultation / Visit" },
    { particular: "Visiting Charges", chargeHead: "Consultant Charges", billFor: "Consultation / Visit" },
    { particular: "Duty Doctor", chargeHead: "Consultant Charges", billFor: "Consultation / Visit" },
    { particular: "Rmo(NME)", chargeHead: "Consultant Charges", billFor: "Consultation / Visit" },
    { particular: "Diet Consultation(NME)", chargeHead: "Consultant Charges", billFor: "Consultation / Visit" },
    { particular: "Surgeon Charges", chargeHead: "Consultant Charges", billFor: "Consultation / Visit" },
    { particular: "Assistant surgeon Charges", chargeHead: "Consultant Charges", billFor: "Consultation / Visit" },
    { particular: "Aneasthetist Charges", chargeHead: "Consultant Charges", billFor: "Consultation / Visit" },
    { particular: "Physiotheraphy", chargeHead: "Consultant Charges", billFor: "Physiotherapy" },
    { particular: "Phototheraphy", chargeHead: "Hospital Charges", billFor: "Phototherapy" },
    { particular: "Monitoring Charges", chargeHead: "Hospital Charges", billFor: "Monitoring Charges" },
    { particular: "Icu monitoring Charges", chargeHead: "Hospital Charges", billFor: "ICU Monitoring Charges" },
    { particular: "Observation Charges", chargeHead: "Surgery Charges", billFor: "Post operative Charges" },
    
    // Procedures
    { particular: "Dressing", chargeHead: "Consultant Charges", billFor: "Procedures Charges" },
    { particular: "Suture Removal", chargeHead: "Consultant Charges", billFor: "Procedures Charges" },
    { particular: "Anterior nasal packing", chargeHead: "Consultant Charges", billFor: "Procedures Charges" },
    { particular: "Emergency Charges", chargeHead: "Consultant Charges", billFor: "Procedures Charges" },
    { particular: "Nebulisation", chargeHead: "Consultant Charges", billFor: "Procedures Charges" },
    { particular: "catherisation", chargeHead: "Consultant Charges", billFor: "Procedures Charges" },
    { particular: "Sterilisation", chargeHead: "Consultant Charges", billFor: "Procedures Charges" },
    { particular: "Foleys catheterization", chargeHead: "Consultant Charges", billFor: "Procedures Charges" },
    { particular: "Intubation", chargeHead: "Consultant Charges", billFor: "Procedures Charges" },
    { particular: "RT intersion", chargeHead: "Consultant Charges", billFor: "Procedures Charges" },
    { particular: "Cannula intersion", chargeHead: "Consultant Charges", billFor: "Procedures Charges" },
    { particular: "GRBS", chargeHead: "Consultant Charges", billFor: "Procedures Charges" },
    
    // Instrument
    { particular: "Syringe Pump(NME)", chargeHead: "Surgery Charges", billFor: "Instrumental Charges" },
    { particular: "Infusion Pump(NME)", chargeHead: "Surgery Charges", billFor: "Instrumental Charges" },
    { particular: "Pulse oxymeter(NME)", chargeHead: "Surgery Charges", billFor: "Instrumental Charges" },
    { particular: "C Arm Charges(NME)", chargeHead: "Surgery Charges", billFor: "Instrumental Charges" },
    { particular: "Air bed(NME)", chargeHead: "Surgery Charges", billFor: "Instrumental Charges" },
    { particular: "Water Bed(NME)", chargeHead: "Surgery Charges", billFor: "Instrumental Charges" },
    { particular: "Teena bed(NME)", chargeHead: "Surgery Charges", billFor: "Instrumental Charges" },
    { particular: "Nimbus Bed(NME)", chargeHead: "Surgery Charges", billFor: "Instrumental Charges" },
    { particular: "Alpha Bed(NME)", chargeHead: "Surgery Charges", billFor: "Instrumental Charges" },
    { particular: "Oxygen cylinder(NME)", chargeHead: "Surgery Charges", billFor: "Instrumental Charges" },
    { particular: "Air matress(NME)", chargeHead: "Surgery Charges", billFor: "Instrumental Charges" },
    { particular: "Monitor Charges(NME)", chargeHead: "Surgery Charges", billFor: "Instrumental Charges" },
    { particular: "Uterescope(NME)", chargeHead: "Surgery Charges", billFor: "Instrumental Charges" },
    { particular: "Medical equipments(NME)", chargeHead: "Surgery Charges", billFor: "Instrumental Charges" },
    { particular: "DVD pump Charges(NME)", chargeHead: "Surgery Charges", billFor: "Instrumental Charges" },
    { particular: "Labour ward", chargeHead: "Surgery Charges", billFor: "Labour Room Charges" },
    
    // Ventilator
    { particular: "Gas Charges", chargeHead: "Hospital Charges", billFor: "Ventilator Charges" },
    { particular: "Oxygen", chargeHead: "Hospital Charges", billFor: "Ventilator Charges" },
    { particular: "Ventilator Charges", chargeHead: "Hospital Charges", billFor: "Ventilator Charges" },
    
    // Package
    { particular: "Coronary angiogram", chargeHead: "Package", billFor: "Package" },
    { particular: "Dialysis", chargeHead: "Package", billFor: "Package" },
    { particular: "Cataract", chargeHead: "Package", billFor: "Package" },
    { particular: "PPN", chargeHead: "Package", billFor: "Package" },
    { particular: "RCT (Root canal treatment)", chargeHead: "Package", billFor: "Package" },
    { particular: "Gipsa", chargeHead: "Package", billFor: "Package" },
    { particular: "Lower segment cesarean section (LSCS)", chargeHead: "Package", billFor: "Package" },
    { particular: "Minimally Invasive Cardiac Surgery (MICS)", chargeHead: "Package", billFor: "Package" },
    { particular: "Knee Replacement", chargeHead: "Package", billFor: "Package" },
    
    // Miscellaneous
    { particular: "Ambulance Charges(NME)", chargeHead: "Miscellaneous Charges", billFor: "Ambulance Charges" },
    { particular: "Service Charges(NME)", chargeHead: "Miscellaneous Charges", billFor: "Service Charges" },
    { particular: "Nutrition Assessment(NME)", chargeHead: "Miscellaneous Charges", billFor: "Other Miscellaneous Charges" },
    { particular: "Food and Beverages,Dietary Charges(NME)", chargeHead: "Miscellaneous Charges", billFor: "Other Miscellaneous Charges" },
    { particular: "canteen(NME)", chargeHead: "Miscellaneous Charges", billFor: "Other Miscellaneous Charges" },
    { particular: "Medical records(NME)", chargeHead: "Miscellaneous Charges", billFor: "Other Miscellaneous Charges" },
    { particular: "Documentation(NME)", chargeHead: "Miscellaneous Charges", billFor: "Other Miscellaneous Charges" },
    { particular: "Insurance processing(NME)", chargeHead: "Miscellaneous Charges", billFor: "Other Miscellaneous Charges" },
    { particular: "History assesment Charges(NME)", chargeHead: "Miscellaneous Charges", billFor: "Other Miscellaneous Charges" },
    { particular: "Common items(NME)", chargeHead: "Miscellaneous Charges", billFor: "Other Miscellaneous Charges" },
    { particular: "Admission Charges(NME)", chargeHead: "Miscellaneous Charges", billFor: "Other Miscellaneous Charges" },
    { particular: "Registration Charges(NME)", chargeHead: "Miscellaneous Charges", billFor: "Other Miscellaneous Charges" },
    { particular: "Aya Charges(NME)", chargeHead: "Miscellaneous Charges", billFor: "Other Miscellaneous Charges" },
    { particular: "Bio Medical waste(NME)", chargeHead: "Miscellaneous Charges", billFor: "Bio Medical Waste" },
    { particular: "Bmw(NME)", chargeHead: "Miscellaneous Charges", billFor: "Bio Medical Waste" },
    { particular: "MLC(NME)", chargeHead: "Miscellaneous Charges", billFor: "MLC Charges" },
    { particular: "Attender Charges(NME)", chargeHead: "Miscellaneous Charges", billFor: "Other Miscellaneous Charges" },
    { particular: "Certificate Charges(NME)", chargeHead: "Miscellaneous Charges", billFor: "Other Miscellaneous Charges" },
    { particular: "Mortuary Charge(NME)", chargeHead: "Miscellaneous Charges", billFor: "Other Miscellaneous Charges" },
    { particular: "Baby utility Charges(NME)", chargeHead: "Miscellaneous Charges", billFor: "Other Miscellaneous Charges" },
    { particular: "CSSD Charges(NME)", chargeHead: "Miscellaneous Charges", billFor: "Other Miscellaneous Charges" },
    { particular: "File Charges(NME)", chargeHead: "Miscellaneous Charges", billFor: "Other Miscellaneous Charges" },
    { particular: "Laundry chargse(NME)", chargeHead: "Miscellaneous Charges", billFor: "Other Miscellaneous Charges" },
    { particular: "Linen Charges(NME)", chargeHead: "Miscellaneous Charges", billFor: "Other Miscellaneous Charges" },
    { particular: "Administrative Charges(NME)", chargeHead: "Miscellaneous Charges", billFor: "Administration Charges" },
    { particular: "Preparation Charges(NME)", chargeHead: "Miscellaneous Charges", billFor: "Other Miscellaneous Charges" },
    { particular: "Other Charges(NME)", chargeHead: "Miscellaneous Charges", billFor: "Other Miscellaneous Charges" },
    { particular: "Tag, id band(NME)", chargeHead: "Miscellaneous Charges", billFor: "Other Miscellaneous Charges" },
    { particular: "Tpa Charges(NME)", chargeHead: "Miscellaneous Charges", billFor: "Other Miscellaneous Charges" },
    { particular: "Taxes(NME)", chargeHead: "Miscellaneous Charges", billFor: "Other Miscellaneous Charges" },

    { particular: "Iv Fluids", chargeHead: "Pharmacy & Medicine Charges", billFor: "IV Fluids / Disposables" },
    { particular: "Blood Charges", chargeHead: "Pharmacy & Medicine Charges", billFor: "Blood Charges" },
    { particular: "Vaccination Charges(NME)", chargeHead: "Pharmacy & Medicine Charges", billFor: "Vaccination Charges" },
    { particular: "Baby vaccination Charges(NME)", chargeHead: "Pharmacy & Medicine Charges", billFor: "Vaccination Charges" },
    { particular: "Mri", chargeHead: "Investigation & Lab Charges", billFor: "Radiology (MRI/CT/X-Ray)" },
    { particular: "Ct scan", chargeHead: "Investigation & Lab Charges", billFor: "Radiology (MRI/CT/X-Ray)" },
    { particular: "X ray, X ray chest PA", chargeHead: "Investigation & Lab Charges", billFor: "Radiology (MRI/CT/X-Ray)" },
    { particular: "CBC,", chargeHead: "Investigation & Lab Charges", billFor: "Pathology (HPE,Biopsy)" },
    { particular: "Creatine,Lft,Rft,kft", chargeHead: "Investigation & Lab Charges", billFor: "Pathology (HPE,Biopsy)" },
    { particular: "White blood cell count (WBC)", chargeHead: "Investigation & Lab Charges", billFor: "Pathology (HPE,Biopsy)" },
    { particular: "Red blood cell count (RBC)", chargeHead: "Investigation & Lab Charges", billFor: "Pathology (HPE,Biopsy)" },
    { particular: "Platelet count", chargeHead: "Investigation & Lab Charges", billFor: "Pathology (HPE,Biopsy)" },
    { particular: "ECG", chargeHead: "Investigation & Lab Charges", billFor: "Radiology (MRI/CT/X-Ray)" },
    { particular: "Urine r/s", chargeHead: "Investigation & Lab Charges", billFor: "Pathology (HPE,Biopsy)" },
    { particular: "Electrolytes", chargeHead: "Investigation & Lab Charges", billFor: "Pathology (HPE,Biopsy)" },
    { particular: "Serum creatine", chargeHead: "Investigation & Lab Charges", billFor: "Pathology (HPE,Biopsy)" },
    { particular: "Lipid profile", chargeHead: "Investigation & Lab Charges", billFor: "Pathology (HPE,Biopsy)" },
    { particular: "Urine analysis", chargeHead: "Investigation & Lab Charges", billFor: "Pathology (HPE,Biopsy)" },
    { particular: "Hba1c", chargeHead: "Investigation & Lab Charges", billFor: "Pathology (HPE,Biopsy)" },
    { particular: "Stool test", chargeHead: "Investigation & Lab Charges", billFor: "Pathology (HPE,Biopsy)" },
    { particular: "EEG", chargeHead: "Investigation & Lab Charges", billFor: "Neurology (EEG,EMG)" },
    { particular: "Blood urea", chargeHead: "Investigation & Lab Charges", billFor: "Pathology (HPE,Biopsy)" },
    { particular: "Crp (c-reactive protein)", chargeHead: "Investigation & Lab Charges", billFor: "Pathology (HPE,Biopsy)" },
    { particular: "Prothrombin Time", chargeHead: "Investigation & Lab Charges", billFor: "Pathology (HPE,Biopsy)" },
    { particular: "Ultrasound abdomen specify site", chargeHead: "Investigation & Lab Charges", billFor: "Radiology (MRI/CT/X-Ray)" },
    { particular: "Pottasium serum", chargeHead: "Investigation & Lab Charges", billFor: "Pathology (HPE,Biopsy)" },
    { particular: "Magnesium,pottasium serum,sodium serum", chargeHead: "Investigation & Lab Charges", billFor: "Pathology (HPE,Biopsy)" },
    { particular: "HBSAG", chargeHead: "Investigation & Lab Charges", billFor: "Pathology (HPE,Biopsy)" },
    { particular: "Rapid profile", chargeHead: "Investigation & Lab Charges", billFor: "Pathology (HPE,Biopsy)" },
    { particular: "Pharmacy", chargeHead: "Pharmacy & Medicine Charges", billFor: "Medicines/Drugs" },
    { particular: "Consumables", chargeHead: "Pharmacy & Medicine Charges", billFor: "Medicines/Drugs" },
    { particular: "Materials", chargeHead: "Pharmacy & Medicine Charges", billFor: "Medicines/Drugs" },
    { particular: "Ot Consumables", chargeHead: "Pharmacy & Medicine Charges", billFor: "OT Consumables" },
    { particular: "Drugs", chargeHead: "Pharmacy & Medicine Charges", billFor: "Medicines/Drugs" },
    { particular: "Gst on Room", chargeHead: "Hospital Charges", billFor: "GST on Room Rent" }
  ];



// Function to filter data based on input value
const filterData = (inputValue) => {
    return data.filter(item =>
        item.particular.toLowerCase().includes(inputValue.toLowerCase())
    );
};

// Function to update suggestions based on input value
const updateSuggestions = (inputValue) => {
    const filteredData = filterData(inputValue);
    suggestionList.innerHTML = '';
    filteredData.forEach(item => {
        const option = document.createElement('option');
        option.value = item.particular;
        suggestionList.appendChild(option);
    });
};

// Function to handle input change event
const handleInputChange = (event) => {
    const inputValue = event.target.value;
    updateSuggestions(inputValue);
};

// Function to simulate a click event
const simulateClick = (element) => {
    const event = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
    });
    element.dispatchEvent(event);
};

// Function to delay execution
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Create input box and datalist for suggestions
const inputBox = document.createElement('input');
inputBox.type = 'text';
inputBox.placeholder = 'Enter particular';
inputBox.id = 'particularInput';
inputBox.setAttribute('list', 'particularSuggestions');

const suggestionList = document.createElement('datalist');
suggestionList.id = 'particularSuggestions';

// Create "Add" button
const addButton = document.createElement('button');
addButton.innerText = 'Add';
addButton.id = 'addButton';

// Style the input box and button
inputBox.style.position = 'fixed';
inputBox.style.top = '58px';
inputBox.style.right = '450px';
inputBox.style.zIndex = '1000';
inputBox.style.padding = '5px';

addButton.style.position = 'fixed';
addButton.style.top = '58px';
addButton.style.right = '400px';
addButton.style.zIndex = '1000';
addButton.style.padding = '5px';

// Append input box, suggestion list, and button to the body
document.body.appendChild(inputBox);
document.body.appendChild(suggestionList);
document.body.appendChild(addButton);

// Add event listener to input box for autocomplete
inputBox.addEventListener('input', handleInputChange);

// Add event listener to "Add" button
addButton.addEventListener('click', async () => {
    const particularValue = inputBox.value.trim();
    console.log(`Entered particular: ${particularValue}`);

    const result = data.find(item => item.particular.toLowerCase() === particularValue.toLowerCase());

    if (!result) {
        alert('No matching particular found.');
        return;
    }

    // Simulate clicking the "New Bill" button
    const newBillButton = document.querySelector('.btn.new-bill--btn');
    if (newBillButton) {
        console.log('Simulating click on "New Bill" button');
        simulateClick(newBillButton);
    } else {
        alert('New Bill button not found.');
        return;
    }

    // Wait for the new row to be added and dropdowns to be available
    await delay(1000);

    // Find all the rows in the summary-billing section
    const rows = document.querySelectorAll('.summary-billing--scroll .tablation--row--main');

    // Find the newly added row (last row)
    const newRow = rows[rows.length - 1];
    console.log('New Row HTML:', newRow.outerHTML);

    // Handle dropdown selection in the new row
    const chargeHeadDropdown = newRow.querySelector('#categoryLevel1');
    const billForDropdown = newRow.querySelector('#categoryLevel2');

    console.log('Selected charge head dropdown:', chargeHeadDropdown);
    console.log('Selected bill for dropdown:', billForDropdown);

    // Set the first dropdown value (charge head)
    if (chargeHeadDropdown) {
        chargeHeadDropdown.value = result.chargeHead;
        console.log(`Setting charge head dropdown value: ${result.chargeHead}`);

        // Dispatch change event on the first dropdown to trigger any associated events
        chargeHeadDropdown.dispatchEvent(new Event('change'));
    } else {
        console.log('Charge head dropdown not found in the new row.');
    }

    // Wait for the second dropdown to be enabled
    await delay(500);

    // Ensure the billForDropdown is enabled before setting its value
    if (billForDropdown.disabled) {
        billForDropdown.disabled = false;
        console.log('Enabled bill for dropdown:', billForDropdown);
    }

    // Set the second dropdown value (bill for)
    if (billForDropdown) {
        billForDropdown.value = result.billFor;
        console.log(`Setting bill for dropdown value: ${result.billFor}`);

        // Dispatch change event on the second dropdown to trigger any associated events
        billForDropdown.dispatchEvent(new Event('change'));

        // Enable all input fields and buttons in the new row after dropdown selection
        await delay(1000); // Adjust delay as needed

        const inputsAndButtons = newRow.querySelectorAll('input, button, .input-group.icon--input.hvr-nme-tooltip');
        inputsAndButtons.forEach(element => {
            element.disabled = false;
        });

        console.log('All inputs and buttons enabled in the new row.');
    } else {
        console.log('Bill for dropdown not found in the new row.');
    }
});
