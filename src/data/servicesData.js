// Import images
import Point1 from "/services/Point1.jpg";
import Point2 from "/services/Point2.jpg";
import Point3 from "/services/Point3.jpg";
import Point4 from "/services/Point4.jpg";
import Point5 from "/services/Point5.jpg";

// Services data
const services = [
  {
    id: 1,
    title: "Mediation – Rebuilding Relationships through Communication",
    description:
      "Our team of Mediation experts provide tailor made and innovative services aimed at achieving the disputing parties needs in a confidential process where they help guide both sides toward a mutually agreeable solution. This approach emphasizes open communication, understanding, and cooperation.",
    benefits: [
      "Cost-Effective: Making Mediation much more affordable than traditional court proceedings, saving you time and money.",
      "Control Over the Outcome: Both parties remain in control of the decision-making process, creating a solution that works best for everyone involved unlike the traditional court process.",
      "Faster Resolution: Mediation can often be completed in just a few sessions, avoiding the long delays of the courtroom.",
      "Preservation of Relationships: By fostering collaboration, mediation helps rebuild trust and strengthen relationships, whether in families or business partnerships.",
      "Confidentiality: By taking control of the mediation process, our team of experts maintain confidentiality where they have signed Non-Disclosure Agreements in the course of the resolution process.",
    ],
    image: Point1,
  },
  {
    id: 2,
    title: "Negotiation – Direct and Collaborative Problem-Solving",
    description:
      "Negotiation is a process where the parties involved directly communicate with each other to reach an agreement. This method can be done with or without legal representation and is typically more informal than mediation or arbitration.",
    benefits: [
      "Autonomy: You are in charge of the negotiation, with the flexibility to reach a solution that fits your specific needs.",
      "Quick and Efficient: Negotiation can often be concluded much quicker than the formalities of court, helping you resolve issues swiftly.",
      "Cost Savings: It eliminates costly legal fees, as you can work directly with the other party to settle the dispute.",
      "Encourages Cooperation: Negotiation builds mutual understanding and cooperation, essential for long-term success in resolving conflicts.",
    ],
    image: Point2,
  },
  {
    id: 3,
    title: "Arbitration – A Binding and Fair Decision",
    description:
      "Arbitration involves a neutral third party (the arbitrator) who listens to both sides and makes a binding decision. This method is more structured than mediation but still avoids the formalities and expenses of court.",
    benefits: [
      "Finality: The decision made by the arbitrator is binding and enforceable, providing clarity and closure for all parties involved.",
      "Expertise: Arbitrators often have specialized knowledge in the area of dispute, ensuring that the decision is well-informed and relevant.",
      "Speed: Arbitration is typically faster than court trials, allowing you to resolve disputes without prolonged waiting.",
      "Confidentiality: Arbitration sessions are private, keeping the details of your dispute confidential and protected.",
    ],
    image: Point3,
  },
  {
    id: 4,
    title: "Restorative Justice – Healing and Rebuilding Trust",
    description:
      "Restorative justice focuses on repairing harm by bringing the parties together to understand the impact of their actions and find a way to restore harmony. This method is particularly effective for family or community disputes.",
    benefits: [
      "Emotional Healing: Restorative justice helps individuals process feelings and emotions, leading to emotional healing and closure.",
      "Restores Trust: By focusing on understanding and accountability, this approach rebuilds trust and strengthens relationships.",
      "Long-Term Solutions: It addresses the root causes of the conflict, leading to sustainable resolutions that prevent future disputes.",
      "Community and Personal Growth: It empowers individuals to take responsibility for their actions and make amends, fostering personal and communal growth.",
    ],
    image: Point4,
  },
  {
    id: 5,
    title: "Conciliation – Facilitating Agreement with Expert Guidance",
    description:
      "Conciliation involves a neutral third party who actively helps the disputing parties reach an agreement. The conciliator may suggest solutions and help facilitate discussions, making this process more proactive than mediation.",
    benefits: [
      "Expert Guidance: The conciliator's input can help clarify complex issues and propose realistic solutions, easing the process toward resolution.",
      "Timely: Conciliation helps parties resolve disputes faster by focusing on finding practical solutions without the delays of litigation.",
      "Collaborative: Like mediation, conciliation fosters cooperation between the parties, helping them maintain or rebuild professional or personal relationships.",
      "Cost-Effective: Conciliation is generally more affordable than going to court, saving you both time and money.",
    ],
    image: Point5,
  },
];

export default services;
