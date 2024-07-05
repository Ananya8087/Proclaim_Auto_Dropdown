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
    { particular: "General Nursing", chargeHead: "Hospital Charges", billFor: "Nursing Charges" },
    { particular: "Single Nursing", chargeHead: "Hospital Charges", billFor: "Nursing Charges" },
    { particular: "Private Nursing", chargeHead: "Hospital Charges", billFor: "Nursing Charges" },
    { particular: "Special Nursing", chargeHead: "Hospital Charges", billFor: "Nursing Charges" },
    { particular: "Deluxe Nursing", chargeHead: "Hospital Charges", billFor: "Nursing Charges" },
    
    // Icu Nursing
    { particular: "Micu Nursing", chargeHead: "Hospital Charges", billFor: "ICU Nursing Charges" },
    { particular: "Nicu Nursing", chargeHead: "Hospital Charges", billFor: "ICU Nursing Charges" },
    { particular: "Sicu Nursing", chargeHead: "Hospital Charges", billFor: "ICU Nursing Charges" },
    { particular: "Icu, Hdu Nursing", chargeHead: "Hospital Charges", billFor: "ICU Nursing Charges" },
    
    // Consultation
    { particular: "Consultation", chargeHead: "Consultant Charges", billFor: "Consulation / Visit" },
    { particular: "Icu Conultation", chargeHead: "Consultant Charges", billFor: "ICU Consultant" },
    { particular: "Hdu,Sicu,Micu consultation", chargeHead: "Consultant Charges", billFor: "ICU Consultant" },
    { particular: "Intensivisit", chargeHead: "Consultant Charges", billFor: "Intensivisit Charges" },
    { particular: "Dmo,Jmo", chargeHead: "Consultant Charges", billFor: "Consultation / Visit" },
    { particular: "Visiting Charges", chargeHead: "Consultant Charges", billFor: "Consultation / Visit" },
    { particular: "Duty Doctor", chargeHead: "Consultant Charges", billFor: "Consultation / Visit" },
    { particular: "Rmo", chargeHead: "Consultant Charges", billFor: "Consultation / Visit" },
    { particular: "Diet Consultation", chargeHead: "Consultant Charges", billFor: "Consultation /visit" },
    { particular: "Surgeon Charges", chargeHead: "Consultant Charges", billFor: "Consultation / Visit" },
    { particular: "Assistant surgeon Charges", chargeHead: "Consultant Charges", billFor: "Consultation /Visit" },
    { particular: "Aneasthetist Charges", chargeHead: "Consultant Charges", billFor: "Consultation /Visit" },
    { particular: "Physiotheraphy", chargeHead: "Consultant Charges", billFor: "Physiotheraphy" },
    { particular: "Phototheraphy", chargeHead: "Hospital Charges", billFor: "Phototheraphy" },
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
    { particular: "Syringe Pump", chargeHead: "Surgery Charges", billFor: "Instrumental Charges" },
    { particular: "Infusion Pump", chargeHead: "Surgery Charges", billFor: "Instrumental Charges" },
    { particular: "Pulse oxymeter", chargeHead: "Surgery Charges", billFor: "Instrumental Charges" },
    { particular: "C Arm Charges", chargeHead: "Surgery Charges", billFor: "Instrumental Charges" },
    { particular: "Air bed", chargeHead: "Surgery Charges", billFor: "Instrumental Charges" },
    { particular: "Water Bed", chargeHead: "Surgery Charges", billFor: "Instrumental Charges" },
    { particular: "Teena bed", chargeHead: "Surgery Charges", billFor: "Instrumental Charges" },
    { particular: "Nimbus Bed", chargeHead: "Surgery Charges", billFor: "Instrumental Charges" },
    { particular: "Alpha Bed", chargeHead: "Surgery Charges", billFor: "Instrumental Charges" },
    { particular: "Oxygen cylinder", chargeHead: "Surgery Charges", billFor: "Instrumental Charges" },
    { particular: "Air matress", chargeHead: "Surgery Charges", billFor: "Instrumental Charges" },
    { particular: "Monitor Charges", chargeHead: "Surgery Charges", billFor: "Instrumental Charges" },
    { particular: "Uterescope", chargeHead: "Surgery Charges", billFor: "Instrumental Charges" },
    { particular: "Medical equipments", chargeHead: "Surgery Charges", billFor: "Instrumental Charges" },
    { particular: "DVD pump Charges", chargeHead: "Surgery Charges", billFor: "Instrumental Charges" },
    { particular: "Labour ward", chargeHead: "Surgery Charges", billFor: "Labour room Charges" },
    
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
    { particular: "Ambulance Charges", chargeHead: "Miscellaneous Charges", billFor: "Ambulance Charges" },
    { particular: "Service Charges", chargeHead: "Miscellaneous Charges", billFor: "Service Charges" },
    { particular: "Nutrition Assessment", chargeHead: "Miscellaneous Charges", billFor: "Other Miscellaneous Charges" },
    { particular: "Food and Beverages,Dietary Charges", chargeHead: "Miscellaneous Charges", billFor: "Other Miscellaneous Charges" },
    { particular: "canteen", chargeHead: "Miscellaneous Charges", billFor: "Other Miscellaneous Charges" },
    { particular: "Medical records", chargeHead: "Miscellaneous Charges", billFor: "Other Miscellaneous Charges" },
    { particular: "Documentation", chargeHead: "Miscellaneous Charges", billFor: "Other Miscellaneous Charges" },
    { particular: "Insurance processing", chargeHead: "Miscellaneous Charges", billFor: "Other Miscellaneous Charges" },
    { particular: "History assesment Charges", chargeHead: "Miscellaneous Charges", billFor: "Other Miscellaneous Charges" },
    { particular: "Common items", chargeHead: "Miscellaneous Charges", billFor: "Other Miscellaneous Charges" },
    { particular: "Admission Charges", chargeHead: "Miscellaneous Charges", billFor: "Other Miscellaneous Charges" },
    { particular: "Registration Charges", chargeHead: "Miscellaneous Charges", billFor: "Other Miscellaneous Charges" },
    { particular: "Aya Charges", chargeHead: "Miscellaneous Charges", billFor: "Other Miscellaneous Charges" },
    { particular: "Bio Medical waste", chargeHead: "Miscellaneous Charges", billFor: "Bio medical waste" },
    { particular: "Bmw", chargeHead: "Miscellaneous Charges", billFor: "Bio medical waste" },
    { particular: "MLC", chargeHead: "Miscellaneous Charges", billFor: "MLC Charges" },
    { particular: "Attender Charges", chargeHead: "Miscellaneous Charges", billFor: "Other Miscellaneous Charges" },
    { particular: "Certificate Charges", chargeHead: "Miscellaneous Charges", billFor: "Other Miscellaneous Charges" },
    { particular: "Mortuary Charges", chargeHead: "Miscellaneous Charges", billFor: "Other Miscellaneous Charges" },
    { particular: "Baby utility Charges", chargeHead: "Miscellaneous Charges", billFor: "Other Miscellaneous Charges" },
    { particular: "CSSD Charges", chargeHead: "Miscellaneous Charges", billFor: "Other Miscellaneous Charges" },
    { particular: "File Charges", chargeHead: "Miscellaneous Charges", billFor: "Other Miscellaneous Charges" },
    { particular: "Laundry chargse", chargeHead: "Miscellaneous Charges", billFor: "Other Miscellaneous Charges" },
    { particular: "Linen Charges", chargeHead: "Miscellaneous Charges", billFor: "Other Miscellaneous Charges" },
    { particular: "Administrative Charges", chargeHead: "Miscellaneous Charges", billFor: "Administrative Charges" },
    { particular: "Preparation Charges", chargeHead: "Miscellaneous Charges", billFor: "Other Miscellaneous Charges" },
    { particular: "Other Charges", chargeHead: "Miscellaneous Charges", billFor: "Other Miscellaneous Charges" },
    { particular: "Tag, id band", chargeHead: "Miscellaneous Charges", billFor: "Other Miscellaneous Charges" },
    { particular: "Tpa Charges", chargeHead: "Miscellaneous Charges", billFor: "Other Miscellaneous Charges" },
    { particular: "Taxes", chargeHead: "Miscellaneous Charges", billFor: "Other Miscellaneous Charges" },

    { particular: "Iv Fluids", chargeHead: "Pharmacy & Medicine Charges", billFor: "IV Fluids / Disposables" },
    { particular: "Blood Charges", chargeHead: "Pharmacy & Medicine Charges", billFor: "Blood Charges" },
    { particular: "Vaccination Charges", chargeHead: "Pharmacy & Medicine Charges", billFor: "Vaccination Charges" },
    { particular: "Baby vaccination Charges", chargeHead: "Pharmacy & Medicine Charges", billFor: "Vaccination Charges" },
    { particular: "Mri", chargeHead: "Investigation & Lab Charges", billFor: "Radiology (MRI/CT/X-Ray)" },
    { particular: "Ct scan", chargeHead: "Investigation & Lab Charges", billFor: "Radiology (MRI/CT/X-Ray)" },
    { particular: "X ray, X ray chest PA", chargeHead: "Investigation & Lab Charges", billFor: "Radiology (MRI/CT/X-Ray)" },
    { particular: "CBC,", chargeHead: "Investigation & Lab Charges", billFor: "Pathology(HPE,Biopsy)" },
    { particular: "Creatine,Lft,Rft,kft", chargeHead: "Investigation & Lab Charges", billFor: "Pathology(HPE,Biopsy)" },
    { particular: "White blood cell count (WBC)", chargeHead: "Investigation & Lab Charges", billFor: "Pathology (HPE,Biopsy)" },
    { particular: "Red blood cell count (RBC)", chargeHead: "Investigation & Lab Charges", billFor: "Pathology (HPE,Biopsy)" },
    { particular: "Platelet count", chargeHead: "Investigation & Lab Charges", billFor: "Pathology(HPE,Biopsy)" },
    { particular: "ECG", chargeHead: "Investigation & Lab Charges", billFor: "Radiology (MRI/CT/X-Ray)" },
    { particular: "Urine r/s", chargeHead: "Investigation & Lab Charges", billFor: "Pathology (HPE,Biopsy)" },
    { particular: "Electrolytes", chargeHead: "Investigation & Lab Charges", billFor: "Pathology (HPE,Biopsy)" },
    { particular: "Serum creatine", chargeHead: "Investigation & Lab Charges", billFor: "Pathology (HPE,Biopsy)" },
    { particular: "Lipid profile", chargeHead: "Investigation & Lab Charges", billFor: "Pathology (HPE,Biopsy)" },
    { particular: "Urine analysis", chargeHead: "Investigation & Lab Charges", billFor: "Pathology (HPE,Biopsy)" },
    { particular: "Hba1c", chargeHead: "Investigation & Lab Charges", billFor: "Pathology (HPE,Biopsy)" },
    { particular: "Stool test", chargeHead: "Investigation & Lab Charges", billFor: "Pathology (HPE,Biopsy)" },
    { particular: "EEG", chargeHead: "Investigation & Lab Charges", billFor: "Neurology(EEG,EMG)" },
    { particular: "Bloor urea", chargeHead: "Investigation & Lab Charges", billFor: "Pathology (HPE,Biopsy)" },
    { particular: "Crp (c-reactive protein)", chargeHead: "Investigation & Lab Charges", billFor: "Pathology (HPE,Biopsy)" },
    { particular: "Prothrombin Time", chargeHead: "Investigation & Lab Charges", billFor: "Pathology (HPE,Biopsy)" },
    { particular: "Ultrasound abdomen specify site", chargeHead: "Investigation & Lab Charges", billFor: "Radiology (MRI/CT/X-Ray)" },
    { particular: "Pottasium serum", chargeHead: "Investigation & Lab Charges", billFor: "Pathology (HPE,Biopsy)" },
    { particular: "Magnesium,pottasium serum,sodium serum", chargeHead: "Investigation & Lab Charges", billFor: "Pathology (HPE,Biopsy)" },
    { particular: "HBSAG", chargeHead: "Investigation & Lab Charges", billFor: "Pathology (HPE,Biopsy)" },
    { particular: "Rapid profile", chargeHead: "Investigation & Lab Charges", billFor: "Pathology (HPE,Biopsy)" },
    { particular: "Pharmacy", chargeHead: "Pharmacy & Medicine Charges", billFor: "Medicine/Drugs" },
    { particular: "Consumables", chargeHead: "Pharmacy & Medicine Charges", billFor: "Medicine/Drugs" },
    { particular: "Materials", chargeHead: "Pharmacy & Medicine Charges", billFor: "Medicine/Drugs" },
    { particular: "Ot Consumables", chargeHead: "Pharmacy & Medicine Charges", billFor: "OT Consumables" },
    { particular: "Drugs", chargeHead: "Pharmacy & Medicine Charges", billFor: "Medicine/Drugs" },
    { particular: "Gst on Room", chargeHead: "Hospital Charges", billFor: "GST on Room Rent" }
  ];


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

// Create input box and button for testing
const inputBox = document.createElement('input');
inputBox.type = 'text';
inputBox.placeholder = 'Enter particular';
inputBox.id = 'particularInput';

const button = document.createElement('button');
button.innerText = 'Add';
button.id = 'addButton';

// Style the input box and button
inputBox.style.position = 'fixed';
inputBox.style.top = '58px';
inputBox.style.right = '450px';
inputBox.style.zIndex = '1000';
inputBox.style.padding = '5px';

button.style.position = 'fixed';
button.style.top = '58px';
button.style.right = '400px';
button.style.zIndex = '1000';
button.style.padding = '5px';

// Append input box and button to the body
document.body.appendChild(inputBox);
document.body.appendChild(button);

// Add event listener to button
button.addEventListener('click', async () => {
    const particularValue = document.getElementById('particularInput').value;
    console.log(`Entered particular: ${particularValue}`);

    const result = data.find(item => item.particular === particularValue);

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
