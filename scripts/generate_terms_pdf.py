import os
from reportlab.lib.pagesizes import letter, A4
from reportlab.lib.units import inch, mm
from reportlab.lib.colors import HexColor
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, PageBreak, KeepTogether
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.pdfgen import canvas

class NumberedCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        super(NumberedCanvas, self).__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_page_decorations(num_pages)
            super(NumberedCanvas, self).showPage()
        super(NumberedCanvas, self).save()

    def draw_page_decorations(self, page_count):
        self.saveState()
        self.setFont("Helvetica", 8)
        self.setFillColor(HexColor("#94A3B8")) # muted gray
        
        # Bottom rule line
        self.setStrokeColor(HexColor("#E2E8F0"))
        self.setLineWidth(0.6)
        self.line(54, 45, 595.27 - 54, 45) # A4 width is 595.27 pt
        
        # Footer text
        footer_text = "Primary Care Data Services Ltd | Healthcare Terms and Conditions"
        self.drawString(54, 32, footer_text)
        
        # Page number on right
        page_str = str(self._pageNumber)
        self.drawRightString(595.27 - 54, 32, page_str)
        self.restoreState()

def generate_terms_pdf(output_path):
    # A4 dimensions: 595.27 x 841.89 points
    # Margins: 54 pt left/right (0.75 in), top 54 pt, bottom 60 pt
    doc = SimpleDocTemplate(
        output_path,
        pagesize=A4,
        leftMargin=54,
        rightMargin=54,
        topMargin=54,
        bottomMargin=60
    )

    styles = getSampleStyleSheet()
    
    # Custom styles
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=26,
        textColor=HexColor('#1E3A8A'), # Navy blue
        alignment=1, # Centered
        spaceAfter=20
    )
    
    subhead_style = ParagraphStyle(
        'SubHeader',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=15,
        textColor=HexColor('#0F172A'),
        spaceAfter=3
    )

    date_style = ParagraphStyle(
        'EffectiveDate',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=14,
        textColor=HexColor('#334155'),
        spaceAfter=18
    )

    section_heading = ParagraphStyle(
        'SecHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=16,
        textColor=HexColor('#1D4ED8'), # Blue
        spaceBefore=11,
        spaceAfter=5
    )

    body_style = ParagraphStyle(
        'Body',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.2,
        leading=13.5,
        textColor=HexColor('#334155'),
        spaceAfter=6
    )

    bullet_style = ParagraphStyle(
        'BulletItem',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.2,
        leading=13.5,
        textColor=HexColor('#334155'),
        leftIndent=14,
        firstLineIndent=-10,
        spaceAfter=3
    )

    story = []

    # ==================== PAGE 1 ====================
    # Title centered
    story.append(Paragraph("Terms and Conditions", title_style))
    story.append(Paragraph("Primary Care Data Services Ltd", subhead_style))
    story.append(Paragraph("Effective date: 19 October 2026", date_style))

    # 1. Introduction
    story.append(Paragraph("1. Introduction", section_heading))
    story.append(Paragraph(
        "Welcome to Primary Care Data Services Ltd (Company Registration Number: 17506485), a UK-registered "
        "company providing administrative and clinical data support services to healthcare organisations.",
        body_style
    ))
    story.append(Paragraph(
        "These Terms and Conditions govern the use of our website, enquiries, consultation bookings and preliminary "
        "discussions about our services.",
        body_style
    ))
    story.append(Paragraph(
        "By using our website or booking a consultation, you agree to these terms. Any subsequent service engagement "
        "will be subject to a separate written agreement.",
        body_style
    ))

    # 2. Our Services
    story.append(Paragraph("2. Our Services", section_heading))
    story.append(Paragraph(
        "We provide UK-based remote support services to healthcare organisations, including:",
        body_style
    ))
    services_bullets = [
        "Medical coding and clinical document processing",
        "Clinical record summarisation",
        "Scanning and digitisation of healthcare records",
        "Reception and telephone support",
        "Administrative backlog management",
        "Ongoing administrative support",
        "Quality assurance and document processing reviews"
    ]
    for b in services_bullets:
        story.append(Paragraph(f"• {b}", bullet_style))
    
    story.append(Spacer(1, 3))
    story.append(Paragraph(
        "Services are subject to availability, agreed scope and applicable regulatory requirements.",
        body_style
    ))

    # 3. Free Consultations and Bookings
    story.append(Paragraph("3. Free Consultations and Bookings", section_heading))
    story.append(Paragraph(
        "We offer complimentary introductory consultations to discuss the requirements of healthcare organisations.",
        body_style
    ))
    booking_bullets = [
        "Consultations are free of charge and normally last 20 minutes.",
        "Appointments are conducted through Microsoft Teams unless otherwise agreed.",
        "Clients may request to reschedule or cancel their appointments.",
        "We reserve the right to reschedule appointments where reasonably necessary.",
        "Booking a consultation does not create a binding service contract."
    ]
    for b in booking_bullets:
        story.append(Paragraph(f"• {b}", bullet_style))

    # 4. Service Agreements
    story.append(Paragraph("4. Service Agreements", section_heading))
    story.append(Paragraph(
        "Before commencing paid services, Primary Care Data Services Ltd and the healthcare organisation will agree in "
        "writing on the scope of work, responsibilities, fees, service levels and applicable contractual terms.",
        body_style
    ))
    story.append(Paragraph(
        "Where personal data is processed on behalf of a healthcare organisation, an appropriate Data Processing "
        "Agreement must be established before processing begins.",
        body_style
    ))

    # 5. Confidentiality and Data Protection
    story.append(Paragraph("5. Confidentiality and Data Protection", section_heading))
    story.append(Paragraph(
        "We recognise the importance of protecting confidential healthcare information.",
        body_style
    ))
    story.append(Paragraph(
        "We are committed to complying with applicable UK data protection legislation, including the UK GDPR and Data "
        "Protection Act 2018.",
        body_style
    ))

    # Page Break to Page 2 (as in original document)
    story.append(PageBreak())

    # ==================== PAGE 2 ====================
    # Continuing Section 5
    story.append(Paragraph(
        "Personal information submitted through our website or booking system will be handled in accordance with our "
        "Privacy Notice.",
        body_style
    ))
    story.append(Paragraph(
        "Healthcare organisations must not submit identifiable patient records, medical histories or other sensitive clinical "
        "information through our general website enquiry forms or consultation booking fields.",
        body_style
    ))
    story.append(Paragraph(
        "Any processing of patient information will be undertaken only through appropriately authorised and secure "
        "arrangements.",
        body_style
    ))

    # 6. Professional Responsibilities
    story.append(Paragraph("6. Professional Responsibilities", section_heading))
    story.append(Paragraph(
        "Our services provide administrative and clinical information processing support.",
        body_style
    ))
    story.append(Paragraph(
        "We do not independently provide medical diagnosis, treatment or clinical decision-making.",
        body_style
    ))
    story.append(Paragraph(
        "Healthcare organisations remain responsible for clinical oversight, patient care decisions and reviewing outputs "
        "where professional clinical judgement is required.",
        body_style
    ))

    # 7. Fees and Payments
    story.append(Paragraph("7. Fees and Payments", section_heading))
    story.append(Paragraph(
        "Any applicable service fees will be communicated and agreed before paid work begins.",
        body_style
    ))
    story.append(Paragraph(
        "Payment arrangements, invoicing schedules and contractual charges will be documented in the relevant service "
        "agreement.",
        body_style
    ))
    story.append(Paragraph(
        "Introductory consultations are provided free of charge.",
        body_style
    ))

    # 8. Website Information
    story.append(Paragraph("8. Website Information", section_heading))
    story.append(Paragraph(
        "We aim to ensure that information published on our website is accurate and up to date.",
        body_style
    ))
    story.append(Paragraph(
        "However, website content is provided for general information and does not constitute medical, legal or "
        "professional advice.",
        body_style
    ))
    story.append(Paragraph(
        "We may update website content and service descriptions from time to time.",
        body_style
    ))

    # 9. Intellectual Property
    story.append(Paragraph("9. Intellectual Property", section_heading))
    story.append(Paragraph(
        "Unless otherwise stated, the website's branding, logos, original text and other proprietary materials belong to "
        "Primary Care Data Services Ltd or their respective licensors.",
        body_style
    ))
    story.append(Paragraph(
        "Unauthorised reproduction or commercial use is prohibited without appropriate permission.",
        body_style
    ))

    # 10. Liability
    story.append(Paragraph("10. Liability", section_heading))
    story.append(Paragraph(
        "Nothing in these Terms and Conditions excludes or restricts liability that cannot lawfully be excluded, including "
        "liability for fraud, fraudulent misrepresentation or death or personal injury caused by negligence.",
        body_style
    ))
    story.append(Paragraph(
        "Any limitations of liability relating to paid services will be addressed in the relevant written service agreement.",
        body_style
    ))

    # 11. Changes to These Terms
    story.append(Paragraph("11. Changes to These Terms", section_heading))
    story.append(Paragraph(
        "We may update these Terms and Conditions to reflect changes in our services, operational requirements or "
        "applicable legislation.",
        body_style
    ))
    story.append(Paragraph(
        "The latest version will be published on our website.",
        body_style
    ))

    # 12. Governing Law
    story.append(Paragraph("12. Governing Law", section_heading))

    # Page Break to Page 3 (as in original document)
    story.append(PageBreak())

    # ==================== PAGE 3 ====================
    # Continuing Section 12
    story.append(Paragraph(
        "These Terms and Conditions are governed by the laws of England and Wales.",
        body_style
    ))

    # 13. Contact Information
    story.append(Paragraph("13. Contact Information", section_heading))
    contact_details = [
        "<b>Primary Care Data Services Ltd</b>",
        "Company Registration Number: 17506485",
        "Registered Office: 128 City Road, London, EC1V 2NX, United Kingdom",
        "Email: <font color='#1D4ED8'>admin@primarycaredataservices.co.uk</font>",
        "Website: <font color='#1D4ED8'>https://www.primarycaredataservices.co.uk</font>"
    ]
    for line in contact_details:
        story.append(Paragraph(line, body_style))

    # Build the document
    doc.build(story, canvasmaker=NumberedCanvas)
    print(f"Generated PDF successfully at: {output_path}")

if __name__ == '__main__':
    generate_terms_pdf("public/terms-and-conditions.pdf")
    generate_terms_pdf("public/terms-and-conditions-pcds.pdf")
