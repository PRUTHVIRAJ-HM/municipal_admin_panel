import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";

export default function Routing() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <Card className="border-0 shadow-sm ring-1 ring-black/5">
        <CardHeader>
          <CardTitle className="text-base">Automated Routing Rules</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 pt-0">
          {[
            { name: "Sanitation → Sanitation Dept.", note: "Keyword: garbage, waste" },
            { name: "Potholes → Roads Dept.", note: "Model: v2.1, conf. 0.87" },
            { name: "Power Outage → Power Utility", note: "Model: v2.1, conf. 0.91" },
          ].map((r, i) => (
            <div key={i} className="flex items-start justify-between rounded-md border p-3">
              <div>
                <div className="font-medium">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.note}</div>
              </div>
              <Switch />
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="border-0 shadow-sm ring-1 ring-black/5">
        <CardHeader>
          <CardTitle className="text-base">Decision Log</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Report</TableHead>
                <TableHead>Applied</TableHead>
                <TableHead>Routed To</TableHead>
                <TableHead>Confidence</TableHead>
                <TableHead>Override</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 6 }).map((_, i) => (
                <TableRow key={i}>
                  <TableCell>#{1200 + i}</TableCell>
                  <TableCell>ML v2.1</TableCell>
                  <TableCell>Roads</TableCell>
                  <TableCell><Badge variant="secondary" className="rounded-full">0.{8 + (i % 2)}</Badge></TableCell>
                  <TableCell><Badge className="rounded-full">Manual</Badge></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
