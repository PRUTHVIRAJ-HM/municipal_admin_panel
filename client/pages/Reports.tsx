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
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Download, ListFilter } from "lucide-react";

export default function Reports() {
  return (
    <div className="space-y-4">
      <FiltersPanel />
      <Card className="border-0 shadow-sm ring-1 ring-black/5">
        <CardHeader className="flex-row items-center justify-between">
          <CardTitle className="text-base">All Reports</CardTitle>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <ListFilter className="h-4 w-4" /> Columns
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="h-4 w-4" /> Export
            </Button>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Ward</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Urgency</TableHead>
                <TableHead>Submitted</TableHead>
                <TableHead>Assignee</TableHead>
                <TableHead className="text-right">SLA</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 10 }).map((_, i) => (
                <TableRow key={i}>
                  <TableCell>#{1000 + i}</TableCell>
                  <TableCell>Pothole near market</TableCell>
                  <TableCell>Roads</TableCell>
                  <TableCell>3</TableCell>
                  <TableCell>Assigned</TableCell>
                  <TableCell>High</TableCell>
                  <TableCell>2025-01-0{i % 9}</TableCell>
                  <TableCell>Team A</TableCell>
                  <TableCell className="text-right">2d</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
            <div>Showing 1–10 of 2,452</div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div>Page 1 of 246</div>
              <Button variant="outline" size="sm">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
