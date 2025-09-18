import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Audit() {
  return (
    <Card className="border-0 shadow-sm ring-1 ring-black/5">
      <CardHeader>
        <CardTitle className="text-base">Audit Timeline</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 pt-0">
        {[
          { t: "08:10", text: "Report #1234 submitted by citizen" },
          { t: "08:12", text: "Auto-routed to Roads (ML v2.1, 0.87)" },
          { t: "08:20", text: "Acknowledged by Staff (User: jsingh)" },
          { t: "09:05", text: "Assigned to Team A (SLA: 48h)" },
          { t: "14:22", text: "Citizen updated with schedule" },
        ].map((e, i) => (
          <div key={i} className="flex items-start gap-4">
            <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
            <div className="flex-1">
              <div className="text-xs text-muted-foreground">{e.t}</div>
              <div className="text-sm">{e.text}</div>
            </div>
          </div>
        ))}
        <Separator />
        <div className="text-sm text-muted-foreground">All actions are immutable and timestamped (UTC).</div>
      </CardContent>
    </Card>
  );
}
