import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Comms() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <Card className="border-0 shadow-sm ring-1 ring-black/5">
        <CardHeader>
          <CardTitle className="text-base">Conversation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 pt-0">
          <div className="rounded-lg border p-3">
            <div className="text-xs text-muted-foreground">Citizen • 08:30</div>
            <div className="text-sm">
              There is a large pothole near the market.
            </div>
          </div>
          <div className="rounded-lg border p-3">
            <div className="text-xs text-muted-foreground">System • 08:31</div>
            <div className="text-sm">
              Your report has been received. Ref: #1234.
            </div>
          </div>
          <div className="rounded-lg border p-3">
            <div className="text-xs text-muted-foreground">Staff • 09:15</div>
            <div className="text-sm">
              Work order created. Scheduled within 48 hours.
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-sm ring-1 ring-black/5">
        <CardHeader>
          <CardTitle className="text-base">Compose Message</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 pt-0">
          <Select>
            <SelectTrigger className="h-9 w-full">
              <SelectValue placeholder="Select template" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ack">Acknowledgement</SelectItem>
              <SelectItem value="update">Status update</SelectItem>
              <SelectItem value="resolution">Resolution notice</SelectItem>
            </SelectContent>
          </Select>
          <Textarea rows={8} placeholder="Write a message…" />
          <div className="flex items-center gap-2">
            <Button>Send</Button>
            <Button variant="outline">Preview</Button>
          </div>
          <div className="text-xs text-muted-foreground">
            All communications are logged and moderated.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
