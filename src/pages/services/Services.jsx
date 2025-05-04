import "./services.css";
import Layout from "../../layout";

// Import images
import Point1 from "/services/Point1.jpg";
import Point2 from "/services/Point2.jpg";
import Point3 from "/services/Point3.jpg";
import Point4 from "/services/Point4.jpg";
import Point5 from "/services/Point5.jpg";

export default function ServicesPage() {
  return (
    <Layout>
      <div className="content">
        <h1>Our Services</h1>
        <p>
          Are you experiencing family disputes, corporate disputes, land
          disputes, or any other conflict and would like to resolve it without
          the expensive, time-consuming court systems? <br /> At our Dispute
          Resolution Centre, we believe in resolving conflicts through methods
          that focus on rebuilding relationships, restoring trust, and fostering
          excellence. <br /> Here’s how the different dispute resolution
          mechanisms we offer can benefit you:
        </p>

        <br />
        <br />
        <div className="services-container">
          <div className="service-item">
            <div className="service-text-box">
              <h2>
                Mediation – Rebuilding Relationships through Communication
              </h2>
              <br />
              <p>
                Our team of Mediation experts provide tailor made and innovative
                services aimed at achieving the disputing parties needs in a
                confidential process where they help guide both sides toward a
                mutually agreeable solution. This approach emphasizes open
                communication, understanding, and cooperation.
              </p>
              <ul>
                <li>
                  Cost-Effective: Making Mediation much more affordable than
                  traditional court proceedings, saving you time and money.
                </li>
                <li>
                  Control Over the Outcome: Both parties remain in control of
                  the decision-making process, creating a solution that works
                  best for everyone involved unlike the traditional court
                  process.
                </li>
                <li>
                  Faster Resolution: Mediation can often be completed in just a
                  few sessions, avoiding the long delays of the courtroom.
                </li>
                <li>
                  Preservation of Relationships: By fostering collaboration,
                  mediation helps rebuild trust and strengthen relationships,
                  whether in families or business partnerships.
                </li>
                <li>
                  Confidentiality: By taking control of the mediation process,
                  our team of experts maintain confidentiality where they have
                  signed Non-Disclosure Agreements in the course of the
                  resolution process.
                </li>
                <br />
                <br />
                <br />
                <br />
              </ul>
            </div>
            <div className="service-image">
              <img
                src={Point1}
                alt="Mediation"
                style={{
                  mixBlendMode: "multiply",
                  width: 500,
                  height: 500,
                  objectFit: "cover",
                }}
                loading="lazy"
              />
            </div>
          </div>

          <div className="service-item">
            <div className="service-text-box">
              <h2>Negotiation – Direct and Collaborative Problem-Solving</h2>
              <p>
                Negotiation is a process where the parties involved directly
                communicate with each other to reach an agreement. This method
                can be done with or without legal representation and is
                typically more informal than mediation or arbitration.
              </p>
              <ul>
                <li>
                  Autonomy: You are in charge of the negotiation, with the
                  flexibility to reach a solution that fits your specific needs.
                </li>
                <li>
                  Quick and Efficient: Negotiation can often be concluded much
                  quicker than the formalities of court, helping you resolve
                  issues swiftly.
                </li>
                <li>
                  Cost Savings: It eliminates costly legal fees, as you can work
                  directly with the other party to settle the dispute.
                </li>
                <li>
                  Encourages Cooperation: Negotiation builds mutual
                  understanding and cooperation, essential for long-term success
                  in resolving conflicts.
                </li>
                <br />
                <br />
                <br />
                <br />
              </ul>
            </div>
            <div className="service-image">
              <img
                src={Point2}
                alt="Mediation"
                style={{
                  mixBlendMode: "multiply",
                  width: 500,
                  height: 500,
                  objectFit: "cover",
                }}
                loading="lazy"
              />
            </div>
          </div>

          <div className="service-item">
            <div className="service-text-box">
              <h2> Arbitration – A Binding and Fair Decision</h2>
              <p>
                Arbitration involves a neutral third party (the arbitrator) who
                listens to both sides and makes a binding decision. This method
                is more structured than mediation but still avoids the
                formalities and expenses of court.
              </p>
              <ul>
                <li>
                  Finality: The decision made by the arbitrator is binding and
                  enforceable, providing clarity and closure for all parties
                  involved.
                </li>
                <li>
                  Expertise: Arbitrators often have specialized knowledge in the
                  area of dispute, ensuring that the decision is well-informed
                  and relevant.
                </li>
                <li>
                  Speed: Arbitration is typically faster than court trials,
                  allowing you to resolve disputes without prolonged waiting.
                </li>
                <li>
                  Confidentiality: Arbitration sessions are private, keeping the
                  details of your dispute confidential and protected.
                </li>
                <br />
                <br />
                <br />
                <br />
              </ul>
            </div>
            <div className="service-image">
              <img
                src={Point3}
                alt="Mediation"
                style={{
                  mixBlendMode: "multiply",
                  width: 500,
                  height: 500,
                  objectFit: "cover",
                }}
                loading="lazy"
              />
            </div>
          </div>

          <div className="service-item">
            <div className="service-text-box">
              <h2> Restorative Justice – Healing and Rebuilding Trust</h2>
              <p>
                Restorative justice focuses on repairing harm by bringing the
                parties together to understand the impact of their actions and
                find a way to restore harmony. This method is particularly
                effective for family or community disputes.
              </p>
              <ul>
                <li>
                  Emotional Healing: Restorative justice helps individuals
                  process feelings and emotions, leading to emotional healing
                  and closure.
                </li>
                <li>
                  Restores Trust: By focusing on understanding and
                  accountability, this approach rebuilds trust and strengthens
                  relationships.
                </li>
                <li>
                  Long-Term Solutions: It addresses the root causes of the
                  conflict, leading to sustainable resolutions that prevent
                  future disputes.
                </li>
                <li>
                  Community and Personal Growth: It empowers individuals to take
                  responsibility for their actions and make amends, fostering
                  personal and communal growth.
                </li>
                <br />
                <br />
                <br />
                <br />
              </ul>
            </div>
            <div className="service-image">
              <img
                src={Point4}
                alt="Mediation"
                style={{
                  mixBlendMode: "multiply",
                  width: 500,
                  height: 500,
                  objectFit: "cover",
                }}
                loading="lazy"
              />
            </div>
          </div>

          <div className="service-item">
            <div className="service-text-box">
              <h2>
                Conciliation – Facilitating Agreement with Expert Guidance
              </h2>
              <p>
                Conciliation involves a neutral third party who actively helps
                the disputing parties reach an agreement. The conciliator may
                suggest solutions and help facilitate discussions, making this
                process more proactive than mediation.
              </p>
              <ul>
                <li>
                  Expert Guidance: The conciliator’s input can help clarify
                  complex issues and propose realistic solutions, easing the
                  process toward resolution.
                </li>
                <li>
                  Timely: Conciliation helps parties resolve disputes faster by
                  focusing on finding practical solutions without the delays of
                  litigation.
                </li>
                <li>
                  Collaborative: Like mediation, conciliation fosters
                  cooperation between the parties, helping them maintain or
                  rebuild professional or personal relationships.
                </li>
                <li>
                  Cost-Effective: Conciliation is generally more affordable than
                  going to court, saving you both time and money.
                </li>
                <br />
                <br />
                <br />
                <br />
              </ul>
            </div>
            <div className="service-image">
              <img
                src={Point5}
                alt="Mediation"
                style={{
                  mixBlendMode: "multiply",
                  width: 500,
                  height: 500,
                  objectFit: "cover",
                }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
