import FiltersPanel from "@/components/FiltersPanel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";

export default function MapPage() {
  return (
    <div className="space-y-4">
      <FiltersPanel />
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2 border-0 shadow-sm ring-1 ring-black/5">
          <CardHeader>
            <CardTitle className="text-base">City Map</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="relative h-[520px] overflow-hidden rounded-xl border bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:24px_24px]">
              {/* Static markers for UI only */}
              <div className="absolute left-24 top-24">
                <div className="h-3 w-3 rounded-full bg-emerald-500 shadow" />
              </div>
              <div className="absolute left-1/2 top-40">
                <div className="h-4 w-4 rounded-full bg-amber-500 shadow" />
              </div>
              <div className="absolute right-24 bottom-24">
                <div className="h-3 w-3 rounded-full bg-rose-500 shadow" />
              </div>
              {/* Legend */}
              <div className="absolute left-4 top-4 rounded-md border bg-card/95 p-3 text-xs shadow-sm">
                <div className="mb-2 font-medium">Legend</div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" /> Low
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-500" /> High
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-rose-500" /> Critical
                </div>
              </div>
              {/* Toggles */}
              <div className="absolute right-4 top-4 flex items-center gap-4 rounded-md border bg-card/95 p-3 shadow-sm">
                <label className="flex items-center gap-2 text-sm">
                  <span>Clusters</span> <Switch />
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <span>Heatmap</span> <Switch />
                </label>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm ring-1 ring-black/5">
          <CardHeader>
            <CardTitle className="text-base">Reports (nearby)</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">SLA</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { id: "#1024", cat: "Roads", status: "Assigned", sla: "2d" },
                  { id: "#1025", cat: "Power", status: "Submitted", sla: "1d" },
                  {
                    id: "#1026",
                    cat: "Sanitation",
                    status: "In-Progress",
                    sla: "6h",
                  },
                  { id: "#1027", cat: "Water", status: "Resolved", sla: "—" },
                ].map((r) => (
                  <TableRow key={r.id}>
                    <TableCell>{r.id}</TableCell>
                    <TableCell>{r.cat}</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="rounded-full">
                        {r.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">{r.sla}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
