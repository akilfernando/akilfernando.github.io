#!/usr/bin/env python3
"""Four ATS-safe single-column resume variants. WeasyPrint, Liberation Sans, letter."""
from weasyprint import HTML

OUT = "/mnt/user-data/outputs"

PHONE_SL = "+94 70 225 3435"
PHONE_CA = "+1 902 989 7984"  # paused; switch PHONE to this on reactivation/landing
PHONE = PHONE_SL
CONTACT = (f"mail@akilfernando.dev &middot; {PHONE} &middot; akilfernando.dev "
           "&middot; linkedin.com/in/akilf &middot; github.com/akilfernando")
CONTACT_GD = CONTACT + " &middot; akilf.itch.io"

ELIGIBILITY = ("Authorized to work in Canada: Post-Graduation Work Permit (PGWP) valid through June 2029, "
               "no sponsorship required. Relocating September 2026, open to anywhere in Canada. "
               "Eligible for the Atlantic Immigration Program (International Graduate stream). "
               "IELTS General CLB 10.")

CSS = """
@page { size: letter; margin: 0.44in 0.6in; }
* { box-sizing: border-box; }
body { font-family: "Liberation Sans", Arial, sans-serif; font-size: 9.2pt; line-height: 1.22;
       color: #1a1a1a; margin: 0; }
h1 { font-size: 17pt; margin: 0 0 2px 0; letter-spacing: 0.3px; }
.contact { font-size: 8.6pt; color: #333; margin-bottom: 4px; }
.eligibility { font-size: 8.6pt; color: #333; border-top: 1px solid #bbb; border-bottom: 1px solid #bbb;
               padding: 3px 0; margin-bottom: 6px; }
h2 { font-size: 10pt; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #999;
     padding-bottom: 1px; margin: 8px 0 4px 0; }
.entry { margin-bottom: 5px; }
.row { display: flex; justify-content: space-between; }
.org { font-weight: bold; }
.title { font-style: italic; }
.loc, .date { color: #444; font-size: 8.8pt; }
.detail { font-size: 8.8pt; color: #333; margin: 1px 0; }
ul { margin: 2px 0 0 0; padding-left: 14px; }
li { margin-bottom: 1.5px; }
.summary { margin-bottom: 2px; }
.skills p { margin: 1px 0; }
b { font-weight: bold; }
"""

def page(name, contact, summary, sections):
    body = f"<h1>{name}</h1><div class='contact'>{contact}</div>"
    body += f"<div class='eligibility'>{ELIGIBILITY}</div>"
    body += f"<p class='summary'>{summary}</p>"
    for heading, content in sections:
        body += f"<h2>{heading}</h2>{content}"
    return f"<!DOCTYPE html><html><head><meta charset='utf-8'><style>{CSS}</style></head><body>{body}</body></html>"

EDUCATION = """
<div class="entry">
  <div class="row"><span class="org">Dalhousie University</span><span class="loc">Halifax, NS, Canada</span></div>
  <div class="row"><span class="title">BSc Computer Science (Co-op), GPA 3.92</span><span class="date">Oct 2025</span></div>
  <div class="detail">Undergraduate Certificates: Communications Technology and Cyber Security; Web and Mobile Development.</div>
  <div class="detail">Honours: Sexton Scholar, Dean's List (multiple terms), Dalhousie In-Course Scholarship (2025).</div>
</div>
"""

CERTS = ("<div class='entry'>Microsoft Certified: Identity and Access Administrator Associate (SC-300), "
         "earned July 2026. Credential ID DD1C87A88D7AB6D0.</div>")

TS_DETAIL = ("Teams Squared is a global remote staffing firm (legal-first, now multi-industry) that places skilled "
             "professionals from emerging markets into teams at client companies worldwide. Over 130 team members "
             "serving over 100 client companies, on a Microsoft 365 and Entra ID stack.")

def ts_entry(bullets, detail=True):
    d = f"<div class='detail'>{TS_DETAIL}</div>" if detail else ""
    lis = "".join(f"<li>{b}</li>" for b in bullets)
    return f"""
<div class="entry">
  <div class="row"><span class="org">Teams Squared</span><span class="loc">Colombo, Sri Lanka</span></div>
  <div class="row"><span class="title">IT Systems and Cybersecurity Lead</span><span class="date">Mar 2026 to Present</span></div>
  {d}
  <ul>{lis}</ul>
</div>"""

ISMS_BULLET = ("Appointed Information Security Management System (ISMS) Officer; lead the company-wide "
               "ISO 27001 implementation, policy enforcement, and compliance, including mandatory ISMS training "
               "delivered to contractors through an internal platform I built, ahead of the certification audit "
               "scheduled for the end of August 2026.")

UBISOFT_FULL = """
<div class="entry">
  <div class="row"><span class="org">Ubisoft Halifax</span><span class="loc">Halifax, NS, Canada</span></div>
  <div class="row"><span class="title">Gameplay Programmer (Co-op)</span><span class="date">Apr to Aug 2024</span></div>
  <ul>
    <li>Modified character artificial intelligence via behavior trees to align character behavior with game-design directives.</li>
    <li>Expanded a unit-targeting system to compute distances using NavMesh path distance and hex-grid tiles.</li>
    <li>Created a new playable character end-to-end: authored art assets in Maya and integrated them with existing systems (stats, animations, moves, abilities).</li>
    <li>Authored in-engine debug tools for the hex-grid tile and camera systems, accelerating analysis and iteration; fixed camera-clipping issues.</li>
    <li>Fixed numerous bugs and built workarounds for broken dependencies to keep a milestone Game Loop Prototype demo-ready; integrated UI to match the target aesthetic.</li>
  </ul>
</div>"""

UBISOFT_SHORT = """
<div class="entry">
  <div class="row"><span class="org">Ubisoft Halifax</span><span class="loc">Halifax, NS, Canada</span></div>
  <div class="row"><span class="title">Gameplay Programmer (Co-op)</span><span class="date">Apr to Aug 2024</span></div>
  <ul>
    <li>Unity/C# gameplay programming at a AAA studio: Cinemachine camera systems, behavior-tree artificial intelligence, NavMesh and hex-grid targeting.</li>
    <li>Maya character pipeline work and custom in-engine debug tooling.</li>
  </ul>
</div>"""

def proj(name, desc):
    return f"<li><b>{name}</b>: {desc}</li>"

P_LMS = proj("Contractor Training Platform (sole author)",
             "learning management system (LMS) serving the contractor base, primarily lawyers studying legal topics, "
             "and a core ISO 27001 compliance system that delivers the mandatory ISMS training; "
             "Next.js, TypeScript, PostgreSQL.")
P_ALLOC = proj("Fleet Management System (sole author)",
               "grew from an allocation engine into the system of record for the entire device fleet: inventory, "
               "endpoint provisioning via close NinjaOne remote monitoring and management (RMM) integration, and an "
               "ISO 27001 audit trail (auto-logged remote support sessions plus full purchase, allocation, and "
               "handover history). Next.js, Supabase, Drizzle ORM.")
P_PORTAL = proj("Client Portal / company hub (sole developer)",
                "inherited a client-only portal and extended it into the company's central coordination dashboard, "
                "where internal staff, clients, and their team members synchronize their work; currently coordinating "
                "a phased rollout with stakeholders. TypeScript, React.")
P_SECREP = proj("Security Posture Reporting Tool (inherited, significantly extended)",
                "automated weekly fleet reporting with AI-assisted risk scoring and a derived Composite Risk Index "
                "in scheduled PDF reports; I added integration with NinjaOne (RMM) and with the Fleet Management "
                "System I built, on top of Bitdefender GravityZone (EDR) data.")
P_CART = proj("CartCloud (team capstone)",
              "collaborative shopping web application; github.com/TobiOnibudo/cartcloud.")
P_HAPPBIT = proj("Happbit (Dalhousie Mobile Development course, final project)",
                 "cross-platform habit tracker, JavaScript; github.com/akilfernando.")
P_3D = proj("Cross-platform 3D scene (Ubisoft Halifax co-op, title under NDA)",
            "Blender modeling, rigging, and animation rendered via Three.js and packaged with Capacitor into an "
            "Android APK; built with another co-op in my cohort.")
P_ITCH = proj("Published games and demos (personal)",
              "Ammo = Life (portfolio demo that earned my Ubisoft Halifax co-op), Vulkan Graphics Demo, "
              "OpenGL Flight Simulator; playable at akilf.itch.io.")

# ---------------- Variant A: Security & IT Systems (merged) ----------------
A_SUMMARY = ("Security and IT systems lead running identity and access management (IAM), endpoint security, and an "
             "ISO 27001 implementation for a globally distributed workforce at a remote staffing firm. "
             "Microsoft SC-300 certified. Computer Science graduate, Dalhousie University (GPA 3.92).")
A_TS = ts_entry([
    ISMS_BULLET,
    "Lead identity and access management (IAM) on Microsoft Entra ID for a distributed cross-border workforce of "
    "over 130 team members: multi-factor authentication (MFA), Conditional Access, app registrations, and "
    "identity governance.",
    "Secure and administer endpoints for staff working remotely across many countries and embedded in external "
    "client environments: Microsoft 365, Bitdefender GravityZone endpoint detection and response (EDR), and "
    "NinjaOne remote monitoring and management (RMM).",
    "Built the internal Fleet Management System, now the system of record for the device fleet: inventory, "
    "endpoint provisioning integrated with NinjaOne (RMM), and an ISO 27001 audit trail of remote support sessions "
    "and full device purchase, allocation, and handover history.",
    "Hardened internal products: Entra ID single sign-on (SSO), personally identifiable information (PII) leak "
    "remediation, security headers, and credential rotation.",
])
A_SKILLS = ("<div class='skills'><p>ISO 27001 &middot; Governance, risk, and compliance (GRC) &middot; "
            "Identity and access management (IAM) &middot; Microsoft Entra ID &middot; Conditional Access &middot; "
            "Privileged Identity Management (PIM) &middot; Microsoft 365 &middot; Endpoint management &middot; "
            "Bitdefender GravityZone (EDR) &middot; NinjaOne (RMM) &middot; Zero Trust &middot; "
            "Networking (TCP/IP, DNS) &middot; Risk assessment &middot; Security policy &middot; "
            "Scripting and automation (Python) &middot; TypeScript</p></div>")
variant_a = page("Akil Fernando", CONTACT, A_SUMMARY, [
    ("Experience", A_TS + UBISOFT_SHORT),
    ("Certifications", CERTS),
    ("Education", EDUCATION),
    ("Selected Projects", f"<ul>{P_ALLOC}{P_SECREP}{P_PORTAL}</ul>"),
    ("Skills", A_SKILLS),
])

# ---------------- Variant C: Software / Web ----------------
C_SUMMARY = ("Full-stack developer building and running production TypeScript and Python systems at a globally "
             "distributed remote staffing firm, with prior AAA gameplay programming experience at Ubisoft. "
             "Computer Science graduate, Dalhousie University (GPA 3.92).")
C_TS = ts_entry([
    "Sole-authored internal production platforms in TypeScript and Python: a contractor training platform and "
    "a fleet management system; also significantly extended an inherited security-posture reporting tool.",
    "As sole developer, extended an inherited client-only portal into the company's central coordination hub used "
    "by internal staff, clients, and their team members; hardened it (Microsoft Entra ID single sign-on, security "
    "headers, webhook signature verification) and am coordinating a phased rollout.",
    "Ship with Next.js, React, TypeScript, Python/FastAPI, Prisma and Drizzle ORM, PostgreSQL, and Supabase; "
    "Claude Code as the primary development tool.",
    "Also lead IT systems and security for the company (Microsoft 365, Entra ID), including an ISO 27001 "
    "implementation as the appointed ISMS Officer.",
])
C_SKILLS = ("<div class='skills'><p>TypeScript &middot; React &middot; Next.js &middot; Node.js &middot; "
            "Python &middot; FastAPI &middot; PostgreSQL &middot; Prisma &middot; Drizzle ORM &middot; "
            "Supabase &middot; REST APIs &middot; Git &middot; Claude Code &middot; C# &middot; Unity</p></div>")
variant_c = page("Akil Fernando", CONTACT, C_SUMMARY, [
    ("Experience", C_TS + UBISOFT_SHORT),
    ("Selected Projects", f"<ul>{P_LMS}{P_ALLOC}{P_PORTAL}{P_CART}{P_HAPPBIT}</ul>"),
    ("Education", EDUCATION),
    ("Certifications", CERTS),
    ("Skills", C_SKILLS),
])

# ---------------- Variant D: Game Development ----------------
D_SUMMARY = ("Gameplay programmer with AAA co-op experience at Ubisoft Halifax: Unity/C#, camera systems, "
             "behavior-tree artificial intelligence, and custom tooling. Ships personal games and graphics demos "
             "in C++ (Vulkan, OpenGL). Computer Science graduate, Dalhousie University (GPA 3.92).")
D_TS = ts_entry([
    "Build and maintain internal production software (full-stack TypeScript and Python) and lead IT systems "
    "and security for a globally distributed team.",
], detail=False)
D_SKILLS = ("<div class='skills'><p>C# &middot; Unity &middot; C++ &middot; Vulkan &middot; OpenGL &middot; "
            "Cinemachine &middot; NavMesh &middot; Behavior trees &middot; Gameplay and camera systems &middot; "
            "Maya &middot; Blender &middot; Three.js &middot; Godot &middot; Hex-grid systems &middot; "
            "Debug tooling &middot; Git &middot; Linear algebra and 3D math</p></div>")
variant_d = page("Akil Fernando", CONTACT_GD, D_SUMMARY, [
    ("Experience", UBISOFT_FULL + D_TS),
    ("Selected Projects", f"<ul>{P_ITCH}{P_3D}</ul>"),
    ("Education", EDUCATION),
    ("Certifications", CERTS),
    ("Skills", D_SKILLS),
])

files = {
    f"{OUT}/akil-fernando-security-it.pdf": variant_a,
    f"{OUT}/akil-fernando-software.pdf": variant_c,
    f"{OUT}/akil-fernando-gamedev.pdf": variant_d,
}
for path, doc in files.items():
    HTML(string=doc).write_pdf(path)
    print("wrote", path)
print("done")
