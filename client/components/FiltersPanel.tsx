import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Filter, SlidersHorizontal } from "lucide-react";

export default function FiltersPanel() {
  return (
    <div className="flex w-full flex-wrap items-center gap-2">
      <div className="flex items-center gap-2">
        <Filter className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm font-medium">Filters</span>
      </div>
      <Input placeholder="Quick search…" className="h-9 w-48" />
      <Select>
        <SelectTrigger className="h-9 w-40"><SelectValue placeholder="Category" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="sanitation">Sanitation</SelectItem>
          <SelectItem value="roads">Roads</SelectItem>
          <SelectItem value="power">Power</SelectItem>
          <SelectItem value="water">Water</SelectItem>
          <SelectItem value="other">Other</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="h-9 w-36"><SelectValue placeholder="Status" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="submitted">Submitted</SelectItem>
          <SelectItem value="acknowledged">Acknowledged</SelectItem>
          <SelectItem value="assigned">Assigned</SelectItem>
          <SelectItem value="in-progress">In-Progress</SelectItem>
          <SelectItem value="resolved">Resolved</SelectItem>
          <SelectItem value="closed">Closed</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="h-9 w-36"><SelectValue placeholder="Urgency" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="low">Low</SelectItem>
          <SelectItem value="medium">Medium</SelectItem>
          <SelectItem value="high">High</SelectItem>
          <SelectItem value="critical">Critical</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="h-9 w-32"><SelectValue placeholder="Ward" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Ward 1</SelectItem>
          <SelectItem value="2">Ward 2</SelectItem>
          <SelectItem value="3">Ward 3</SelectItem>
          <SelectItem value="4">Ward 4</SelectItem>
        </SelectContent>
      </Select>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="h-9 gap-2"><CalendarIcon className="h-4 w-4" /> Date range</Button>
        </PopoverTrigger>
        <PopoverContent align="start" className="p-2">
          <Calendar mode="range" numberOfMonths={2} />
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="h-9 gap-2"><SlidersHorizontal className="h-4 w-4" /> Presets</Button>
        </PopoverTrigger>
        <PopoverContent className="w-64 text-sm">
          <div className="space-y-2">
            <div className="font-medium">Quick presets</div>
            <div className="flex flex-wrap gap-2">
              <Badge className="cursor-pointer">High Priority in Ward 3</Badge>
              <Badge className="cursor-pointer">New this week</Badge>
              <Badge className="cursor-pointer">Pending &gt; 7 days</Badge>
            </div>
          </div>
        </PopoverContent>
      </Popover>
      <div className="ml-auto flex items-center gap-2">
        <Badge className="rounded-full">Live</Badge>
      </div>
    </div>
  );
}
