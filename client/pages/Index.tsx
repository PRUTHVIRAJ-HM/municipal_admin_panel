import { useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import Gauge from "@/components/Gauge";
import { BookOpen, Palette, Clapperboard } from "lucide-react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default function Index() {
  const hoursData = useMemo(
    () => [
      { month: "Jan", study: 18, exams: 10 },
      { month: "Feb", study: 22, exams: 6 },
      { month: "Mar", study: 28, exams: 12 },
      { month: "Apr", study: 40, exams: 8 },
      { month: "May", study: 24, exams: 5 },
    ],
    [],
  );

  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Hello Pruthviraj 👋</h1>
          <p className="text-muted-foreground">Let’s learn something new today!</p>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <Badge className="rounded-full">College Student</Badge>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-0 shadow-sm ring-1 ring-black/5">
          <CardHeader className="flex-row items-center gap-2">
            <div className="rounded-md bg-amber-100 p-2 text-amber-700"><BookOpen /></div>
            <CardTitle className="text-base">Basic: HTML and CSS</CardTitle>
          </CardHeader>
          <CardContent className="pt-0 text-sm text-muted-foreground flex items-center justify-between">
            <span>24 Lessons</span>
            <Progress className="h-2 w-24" value={62} />
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm ring-1 ring-black/5">
          <CardHeader className="flex-row items-center gap-2">
            <div className="rounded-md bg-emerald-100 p-2 text-emerald-700"><Palette /></div>
            <CardTitle className="text-base">Branding Design</CardTitle>
          </CardHeader>
          <CardContent className="pt-0 text-sm text-muted-foreground flex items-center justify-between">
            <span>18 Lessons</span>
            <Progress className="h-2 w-24" value={45} />
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm ring-1 ring-black/5">
          <CardHeader className="flex-row items-center gap-2">
            <div className="rounded-md bg-indigo-100 p-2 text-indigo-700"><Clapperboard /></div>
            <CardTitle className="text-base">Motion Design</CardTitle>
          </CardHeader>
          <CardContent className="pt-0 text-sm text-muted-foreground flex items-center justify-between">
            <span>12 Lessons</span>
            <Progress className="h-2 w-24" value={25} />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2 border-0 shadow-sm ring-1 ring-black/5">
          <CardHeader>
            <CardTitle className="text-base">Hours Spent</CardTitle>
          </CardHeader>
          <CardContent className="pt-2">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={hoursData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" tickLine={false} axisLine={false} />
                  <YAxis tickLine={false} axisLine={false} />
                  <Tooltip cursor={{ fill: "hsl(var(--muted))" }} />
                  <Bar dataKey="study" stackId="a" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="exams" stackId="a" fill="hsl(var(--accent))" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm ring-1 ring-black/5">
          <CardHeader>
            <CardTitle className="text-base">Performance</CardTitle>
          </CardHeader>
          <CardContent className="pt-2">
            <Gauge value={90} label="Point Progress • Monthly" />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2 border-0 shadow-sm ring-1 ring-black/5">
          <CardHeader>
            <CardTitle className="text-base">Leader Board</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Rank</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead className="text-right">Course</TableHead>
                  <TableHead className="text-right">Point</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { rank: 1, name: "Charlie Rawal", course: 53, point: 13450 },
                  { rank: 2, name: "Ariana Agrawal", course: 88, point: 12120 },
                  { rank: 3, name: "Ritik Singh", course: 42, point: 10780 },
                ].map((r) => (
                  <TableRow key={r.rank}>
                    <TableCell>#{r.rank}</TableCell>
                    <TableCell>{r.name}</TableCell>
                    <TableCell className="text-right">{r.course}</TableCell>
                    <TableCell className="text-right text-emerald-600">{r.point.toLocaleString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Card className="border-0 shadow-sm ring-1 ring-black/5">
            <CardHeader>
              <CardTitle className="text-base">December 2021</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <Calendar mode="single" selected={new Date()} className="rounded-md border" />
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm ring-1 ring-black/5">
            <CardHeader>
              <CardTitle className="text-base">To Do List</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3">
              {[
                { t: "Developing Restaurant Apps", time: "08:00 AM" },
                { t: "Integrate API", time: "02:40 PM" },
                { t: "Slicing Home Screen", time: "04:50 PM" },
              ].map((x, i) => (
                <label key={i} className="flex items-center gap-3 text-sm">
                  <Checkbox />
                  <span className="flex-1">{x.t}</span>
                  <span className="text-muted-foreground">{x.time}</span>
                </label>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
