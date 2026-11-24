# FNL MANAGEMENT SYSTEM
## MASTER ICT HARDWARE MAINTENANCE SCHEDULE

| Document Control Field | Controlled Record Details |
| :--- | :--- |
| **Document ID** | `FNL-ICT-SCH-001` |
| **Revision Number** | Rev 00 (Initial Controlled Schedule) |
| **Effective Date** | November 2026 (Rolling Monthly / Quarterly / Semi-Annual Cycles) |
| **Governing SOP** | `FNL-ICT-SOP-001` (Rev 03, Clauses 4.2, 4.3, 5.1, 7.1, 8.1 & 9.2) |
| **Linked Asset Register** | `FNL-ICT-REG-001` (Rev 03 — 187 Active Units & 24 Standby Units) |
| **Management Standards** | ISO 9001:2015 (Clauses 7.1 & 10.2) & ISO 45001:2018 (Clauses 6.1 & 8.1) |
| **SON Certificate No.** | `0000064` |

---

### Revision & Approval Record

| Rev No | Section | Page No. | Date | Description of Change |
| :--- | :--- | :--- | :--- | :--- |
| **00** | All Sections | All | 19.11.2026 | Initial establishment of defined hardware maintenance tiers, departmental waves, and advance notification intervals per `FNL-ICT-SOP-001` Clause 4.2 and Internal Audit Finding Ref. #2 (23-10-2026). |

| Governance Role | SOP Designation (`FNL-ICT-SOP-001`) | Name & Title | Signature | Date |
| :--- | :--- | :--- | :--- | :--- |
| **Prepared & Executed By** | Senior IT Officer / ICT Coordinator | **Chisom Onyeka** — ICT Senior Officer *(assisted by ICT Intern)* | ______________________ | ____________ |
| **Reviewed By** | Operational / Departmental Oversight | **Hedo Charles** — Maintenance Manager | ______________________ | ____________ |
| **Approved By** | General Manager | **Akinsanya Michael** — General Manager | ______________________ | ____________ |

---

## 1. Purpose & Scope

### 1.1 Purpose
This schedule establishes a formal, predictable, and auditable preventive maintenance timetable for all Information and Communications Technology (ICT) hardware assets operated by **Fedoz Nigeria Limited**. It operationalizes **Clause 4.2 (Hardware Maintenance Policy)** and **Clause 9.2 (Printer Maintenance)** of `FNL-ICT-SOP-001` to maximize equipment uptime, prevent data loss, eliminate electrical/workplace hazards, and ensure zero disruption to daily business operations.

### 1.2 Asset Scope (`FNL-ICT-REG-001` Rev 03)
This schedule covers **100% of Fedoz Nigeria Limited's 211 recorded ICT hardware units** across Head Office (Port Harcourt) and Off-Site Field Operations:
* **Head Office (Port Harcourt HQ) Active Assets:** **153 units** across 114 register lines spanning all departments, corridors, conference rooms, server room, and roof solar power infrastructure.
* **Off-Site Field Active Assets:** **34 serialized units** across 34 register lines:
  * **OBOB Field Location:** **32 units** across Coordinators' Office, Planning & Logistics, Asst Team Lead & Procurement, HSE Office, Team Lead's Office, Conference Room, and Server Room (including 14 upgraded HP 200 G4 22 All-In-One PCs).
  * **BOP Field Allocation:** **2 units** assigned to BOP – Jayakumar (1 Laptop PC and 1 CUG Mobile Phone).
* **ICT Store Unassigned / Standby Stock:** **24 hardware units** across 22 register lines maintained for rapid replacement readiness or formal retirement evaluation under Clause 4.3.

---

## 2. Maintenance Tier Classification (`FNL-ICT-SOP-001` Clauses 4.2 & 9.2)

To match Fedoz Nigeria Limited's lean two-person ICT team (**ICT Senior Officer** + **ICT Intern**) while strictly enforcing every interval mandated in `FNL-ICT-SOP-001`, all hardware assets are categorized into four operational maintenance tiers:

| Tier | Asset Category & Register Scope | Mandatory Interval (`FNL-ICT-SOP-001`) | Service Mode & Location | Preventive Maintenance & ISO Safety Scope |
| :--- | :--- | :--- | :--- | :--- |
| **Tier 1: Mobile ICT Assets** | Laptops, CUG Mobile Phones, Internet Dongles, and portable accessories across HQ & Field (**BOP – Jayakumar**: 1 Laptop, 1 CUG Phone) | **Every 30 Operational Days** *(Staggered across 4 weekly departmental waves)* | **Drop-Off at ICT Office** *(1–2 hour express turnaround per unit; remote check-in for BOP field user)* | OS & security patch updates, antivirus signature verification, disk & battery health diagnostics, temporary file cleanup, LAN/cloud backup check (`Clause 8.1`), physical port & screen sanitization. |
| **Tier 2: Printing & Imaging Systems** | All HQ & Field Printers: Konica Minolta Bizhub C280/C258 (HQ) & C360 (OBOB), HP Smart Tank 519, Canon TS704a, HP DeskJet 2710/2135, HP LaserJet P1006, HP Laser MFP 135a, HP OfficeJet Pro 7740 | **Every 30 Operational Days** *(Strict SOP ceiling: **Max 35 Operational Days** per Clause 9.2)* | **On-Site at Deployment Location** *(Print jobs routed to nearest backup floor printer during servicing)* | Roller, drum, and printhead cleaning; test-page alignment; toner/ink level logging & proactive replenishment (`Clause 9.2`); network spooler & paper-path check. |
| **Tier 3: Fixed Workstations & Office Peripherals** | HQ Desktop Workstations (HP 290 MT, HP 200 G4 AiO, Lenovo V50a, Pavilion TouchSmart), Extension Monitors, Desk UPS units, Intercoms, Projectors/AV, and **OBOB Site Fixed Assets (32 units)** | **30-Day Quick Check + Quarterly Deep Servicing** *(Hard SOP ceiling: **Max 6 Months** per Clause 4.2)* | **On-Site at User Workstation / Off-Site Deployment Location** *(Zero removal from user desk)* | Internal dust extraction, cable routing & trip-hazard inspection (`ISO 45001`), Desk UPS battery load test *(priority: 1st Floor BG1570 UPS)*, OS/software license audit (`Clause 5.1`), OBOB antivirus & serial/RAM verification. |
| **Tier 4: Core Infrastructure, Power & Security** | Server Room Desktop Servers (Network/Biotime & Accounts Sage), Cisco & D-Link Switches, MikroTik Router, Panasonic PBX, Ubiquiti UniFi APs (9), Tenda O3 Extender, CCTV DVRs (2), Biometrics, Satellite Dishes, and **Solar Inverter + 8 Tubular Batteries + 18 Solar Panels** | **Monthly Preventive Inspection + Semi-Annual Deep Overhaul** *(Hard SOP ceiling: **Max 6 Months** per Clause 4.2)* | **On-Site in Server Room / Roof Array** *(Executed during off-peak Saturday windows)* | Server RAID & central backup verification (`Clause 8.1`), firewall/switch & UniFi controller audit, CCTV recording health check, **Tubular Battery & Inverter voltage/load test** (`ISO 45001` electrical safety), solar panel inspection. |

---

## 3. Master Departmental & Site Maintenance Calendar

All HQ departments and off-site locations listed in `FNL-ICT-REG-001` are distributed across a recurring monthly cadence so operational workflows continue uninterrupted:

| Maintenance Window | Day & Time Slot | Departments / Locations Covered | Tiers Covered | Execution & Supervision | Advance Notice Trigger |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Wave 1: Week 1** | **Tuesday & Thursday**<br>09:00 – 13:00 | • **Executive** (CEO's Office, MD's Office, GM)<br>• **ICT Department**<br>• **Human Resources & Admin**<br>• **Front Desk / Reception** | **Tier 1** (Mobile Drop-Off)<br>**Tier 3** (On-Site Desk Check) | **Lead:** Chisom Onyeka<br>**Support:** ICT Intern | **5 Working Days** prior (Cycle Notice) + **48 Hrs** prior to Wave 1 |
| **Wave 2: Week 2** | **Tuesday & Thursday**<br>09:00 – 13:00 | • **Finance & Accounts**<br>• **Procurement**<br>• **Sales & Business Development (SBD)** | **Tier 1** (Mobile Drop-Off)<br>**Tier 3** (On-Site Desk & UPS Check) | **Lead:** Chisom Onyeka<br>**Support:** ICT Intern | **48 Hours** prior to Wave 2 (Email + Calendar Invite) |
| **Wave 3: Week 3** | **Tuesday & Thursday**<br>09:00 – 13:00 | • **Maintenance (MTCE)**<br>• **Technical / Engineering / Mechanical**<br>• **HSE Department**<br>• **Logistics & Pompe** | **Tier 1** (Mobile Drop-Off)<br>**Tier 3** (On-Site Desk Check) | **Lead:** Chisom Onyeka<br>**Support:** ICT Intern | **48 Hours** prior to Wave 3 (Email + Calendar Invite) |
| **Wave 4: Week 4** | **Tuesday & Thursday**<br>09:00 – 13:00 | • **Projects & Contracting / Tendering (C&T)**<br>• **Zestzing & Conference Rooms (1st & 3rd Flr)**<br>• **BOP Field Allocation** (BOP – Jayakumar: 2 units)<br>• **ICT Store Unassigned Stock** (24 standby units) | **Tier 1** (Mobile Drop-Off / BOP Remote Check)<br>**Tier 3** (AV/Conference & Store Readiness Check) | **Lead:** Chisom Onyeka<br>**Support:** ICT Intern | **48 Hours** prior to Wave 4 (Email + Calendar Invite) |
| **Monthly Printer Window** | **4th Friday of Month**<br>10:00 – 15:00 | • **All HQ Floor & Departmental Printers** (Accounts, 1st Flr, 2nd Flr, CEO, HR, ICT, Projects)<br>• **OBOB Site Printers** (Coordinators' C360, HSE MFP 135a, Logistics DeskJet 2135, P1006, 7740) | **Tier 2** (30-Day Service Cycle — strictly inside 35-day SOP limit) | **Execute:** ICT Intern<br>**Verify:** Chisom Onyeka | **48 Hours** prior to 4th Friday |
| **Monthly Core Infrastructure & Off-Site Window** | **Last Saturday of Month**<br>08:00 – 12:00 | • **HQ Server Room, Roof Solar Array & Building Network**<br>• **Off-Site OBOB Field Location (32 Units)** *(Monthly remote audit + scheduled bi-monthly/quarterly physical site visit)* | **Tier 4** (Servers, Switches, PBX, CCTV, Solar/Tubular Batteries)<br>**Tier 3** (OBOB Field Fixed Assets) | **Lead:** Chisom Onyeka<br>**Support:** ICT Intern *(with MTCE Team for Solar/Power)* | **5 Working Days** prior (Off-Peak Downtime Advisory) |

---

## 4. Employee Notification & Pre-Maintenance Protocol (`FNL-ICT-SOP-001` Clauses 4.2 & 7.1)

To guarantee full compliance with Clause 4.2 (*"A notification will be sent to all employees prior to the scheduled maintenance period in order not to forestall any ongoing operations"*), the following mandatory communication controls apply:

1. **Company-Wide Cycle Broadcast (T-Minus 5 Working Days):** At least **5 working days** before the start of each monthly maintenance cycle, the ICT Senior Officer issues an official broadcast email via corporate email (`Clause 7.1`) to all HQ and Field staff outlining the month's wave schedule and backup instructions.
2. **Departmental Wave Reminder (T-Minus 48 Hours):** At least **48 hours** before each weekly wave, printer window, or Saturday infrastructure window, targeted email and calendar reminders are dispatched to the affected department(s) and Site Team Leads.
3. **Mandatory User Data Backup (`Clause 8.1`):** Employees must save active working documents to their designated departmental server folder, cloud drive, or external departmental backup HDD/SSD prior to device handover.
4. **Printer Continuity (`Clause 9.2`):** During Tier 2 printer servicing, print traffic is redirected to the nearest functional floor printer so administrative workflows experience zero interruption.
5. **Audit Evidence Retention:** Timestamped copies of all broadcast emails, calendar notifications, and signed maintenance checklists are archived in the **ICT ISO Compliance Repository** (and linked inside the GLPI ITSM ticketing system).

---

## 5. Escalation, Defect Reporting & Asset Retirement Workflow (`FNL-ICT-SOP-001` Clauses 4.2 & 4.3)

Whenever preventive maintenance or diagnostic troubleshooting uncovers hardware degradation, critical failure, or safety risks (such as aging laptops, failing UPS batteries, or end-of-life equipment):

1. **Technical Diagnosis:** The ICT Intern and ICT Senior Officer document the hardware fault, serial number, and repair feasibility in the Preventive Maintenance Log / ITSM ticket.
2. **Operational Review:** The ICT Senior Officer transmits the consolidated maintenance findings report to the **Maintenance Manager (Hedo Charles)**.
3. **Age & Lifecycle Verification (`Clause 4.3`):** For aged or beyond-economical-repair equipment, **Internal Control** verifies asset age against company capitalization and retirement thresholds.
4. **Executive Approval & Replacement (`IMRF`):** Final recommendations are submitted to the **General Manager (Akinsanya Michael)** for review and authorization of an **Internal Material Requisition Form (IMRF)** to Procurement/Store for replacement.