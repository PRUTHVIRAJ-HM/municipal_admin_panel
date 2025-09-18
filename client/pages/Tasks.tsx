import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const columns = [
  { key: "submitted", title: "Submitted" },
  { key: "acknowledged", title: "Acknowledged" },
  { key: "assigned", title: "Assigned" },
  { key: "inprogress", title: "In-Progress" },
  { key: "resolved", title: "Resolved" },
];

export default function Tasks() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
      {columns.map((c) => (
        <Card key={c.key} className="border-0 shadow-sm ring-1 ring-black/5">
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle className="text-base">{c.title}</CardTitle>
            <Badge variant="secondary" className="rounded-full">
              12
            </Badge>
          </CardHeader>
          <CardContent className="space-y-3 pt-0">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rounded-lg border bg-card p-3 shadow-xs">
                <div className="flex items-start justify-between">
                  <div className="font-medium">Pothole repair at Main St</div>
                  <Badge className="rounded-full">High</Badge>
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  Due in 2d • Ward 3 • Roads
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>SLA</span>
                    <span className="font-medium text-foreground">48h</span>
                  </div>
                  <Avatar className="h-6 w-6">
                    <AvatarFallback>TA</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
