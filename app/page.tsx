"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Toggle } from "@/components/ui/toggle";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Calendar } from "@/components/ui/calendar";
import { Bold, Italic, Underline, Menu } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Skeleton } from "@/components/ui/skeleton";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { DashboardShell } from "@/components/ui";
import { Label } from "@/components/ui/label";
import { NeumorphicDialog } from "@/components/NeumorphicDialog";

const chartData = [
  { name: "Jan", value: 400, value2: 240 },
  { name: "Feb", value: 300, value2: 139 },
  { name: "Mar", value: 200, value2: 980 },
  { name: "Apr", value: 278, value2: 390 },
  { name: "May", value: 189, value2: 480 },
  { name: "Jun", value: 239, value2: 380 },
];

const pieData = [
  { name: "Product A", value: 400 },
  { name: "Product B", value: 300 },
  { name: "Product C", value: 300 },
  { name: "Product D", value: 200 },
];

const COLORS = ["#ea580c", "#ff7d3f", "#d4d7e8", "#35354a"];

export default function Home() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTab, setSelectedTab] = useState("overview");

  return (
    <DashboardShell>
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-4 text-balance">
            Neumorphic Design System
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A cohesive collection of shadcn components reimagined with soft,
            extruded neumorphic styling. Features light and dark mode support
            with next-themes.
          </p>
        </div>

        {/* Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Card Component */}
          <Card>
            <CardHeader>
              <CardTitle>Card Component</CardTitle>
              <CardDescription>
                Neumorphic cards with soft shadows and subtle depth
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Cards now feature the distinctive neumorphic look with soft
                inset and outset shadows. They blend seamlessly with the
                background in light mode and stand out elegantly in dark mode.
              </p>
            </CardContent>
          </Card>

          {/* Button Variants */}
          <Card>
            <CardHeader>
              <CardTitle>Button Variants</CardTitle>
              <CardDescription>
                Multiple button styles with neumorphic depth
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex gap-2 flex-wrap">
                <Button variant="default" size="sm">
                  Default
                </Button>
                <Button variant="outline" size="sm">
                  Outline
                </Button>
              </div>
              <div className="flex gap-2 flex-wrap">
                <Button variant="secondary" size="sm">
                  Secondary
                </Button>
                <Button variant="ghost" size="sm">
                  Ghost
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                Buttons feature layered shadows and active state scaling for
                tactile feedback.
              </p>
            </CardContent>
          </Card>

          {/* Input Component */}
          <Card>
            <CardHeader>
              <CardTitle>Input Field</CardTitle>
              <CardDescription>
                Text input with inset neumorphic styling
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <Label htmlFor="demo-input">Example Input</Label>
                <Input
                  id="demo-input"
                  type="email"
                  placeholder="Enter your email..."
                  defaultValue="hello@example.com"
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Inputs use inset shadows to create a recessed appearance, giving
                them a tactile quality.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Examples */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Button Showcase */}
          <Card>
            <CardHeader>
              <CardTitle>Button States</CardTitle>
              <CardDescription>Interactive button variations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm font-medium text-foreground">Default</p>
                <div className="flex gap-2 flex-wrap">
                  <Button>Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium text-foreground">Outline</p>
                <div className="flex gap-2 flex-wrap">
                  <Button variant="outline" size="sm">
                    Small
                  </Button>
                  <Button variant="outline">Default</Button>
                  <Button variant="outline" size="lg">
                    Large
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium text-foreground">
                  Icon Buttons
                </p>
                <div className="flex gap-2">
                  <Button size="icon-sm" variant="outline">
                    📌
                  </Button>
                  <Button size="icon" variant="outline">
                    🔍
                  </Button>
                  <Button size="icon-lg" variant="outline">
                    ⭐
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Form Example */}
          <Card>
            <CardHeader>
              <CardTitle>Form Example</CardTitle>
              <CardDescription>
                Complete form with neumorphic inputs
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Input
                  id="message"
                  type="text"
                  placeholder="Type your message..."
                  defaultValue="This input has neumorphic styling!"
                />
              </div>
              <div className="flex gap-2 pt-4">
                <Button>Submit</Button>
                <Button variant="outline">Cancel</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Components */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Textarea Example */}
          <Card>
            <CardHeader>
              <CardTitle>Textarea</CardTitle>
              <CardDescription>
                Multi-line input with neumorphic inset shadow
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Textarea
                placeholder="Write your message here..."
                defaultValue="Textareas use the same inset shadow style as inputs for a cohesive look."
              />
              <p className="text-xs text-muted-foreground">
                The recessed appearance makes it clear this is an interactive
                element.
              </p>
            </CardContent>
          </Card>

          {/* Checkbox & Switch */}
          <Card>
            <CardHeader>
              <CardTitle>Controls</CardTitle>
              <CardDescription>
                Checkboxes and switches with neumorphic styling
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Checkbox id="checkbox-demo" />
                <Label htmlFor="checkbox-demo" className="text-sm">
                  Enable notifications
                </Label>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox id="checkbox-demo-2" defaultChecked />
                <Label htmlFor="checkbox-demo-2" className="text-sm">
                  Save preferences
                </Label>
              </div>
              <div className="border-t border-border pt-4 mt-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="switch-demo" className="text-sm">
                    Dark Mode
                  </Label>
                  <Switch id="switch-demo" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Toggle & Badge */}
          <Card>
            <CardHeader>
              <CardTitle>Toggles & Badges</CardTitle>
              <CardDescription>
                Text formatting and status indicators
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm font-medium text-foreground">
                  Text Formatting
                </p>
                <div className="flex gap-2">
                  <Toggle variant="outline" size="sm">
                    <Bold className="h-4 w-4" />
                  </Toggle>
                  <Toggle variant="outline" size="sm">
                    <Italic className="h-4 w-4" />
                  </Toggle>
                  <Toggle variant="outline" size="sm">
                    <Underline className="h-4 w-4" />
                  </Toggle>
                </div>
              </div>
              <div className="space-y-2 pt-4 border-t border-border">
                <p className="text-sm font-medium text-foreground">
                  Status Badges
                </p>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="default">Active</Badge>
                  <Badge variant="secondary">Pending</Badge>
                  <Badge variant="outline">Draft</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Advanced Form */}
          <Card>
            <CardHeader>
              <CardTitle>Advanced Form</CardTitle>
              <CardDescription>
                Complete form showcase with all components
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" placeholder="Choose a username" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  placeholder="Tell us about yourself..."
                  rows={3}
                />
              </div>
              <div className="flex items-center gap-2 pt-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-xs">
                  I agree to the terms and conditions
                </Label>
              </div>
              <div className="flex gap-2 pt-4">
                <Button className="flex-1">Save</Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  Reset
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Dialog & Popover */}
          <Card>
            <CardHeader>
              <CardTitle>Dialog & Popover</CardTitle>
              <CardDescription>
                Modal overlays and floating panels
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <NeumorphicDialog>
                <Button className="w-full">Open Dialog</Button>
              </NeumorphicDialog>
              {/* <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full">Open Dialog</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Neumorphic Dialog</DialogTitle>
                    <DialogDescription>
                      This is a dialog with full neumorphic styling applied. It
                      features soft shadows and subtle depth.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <p className="text-sm text-muted-foreground">
                      Dialogs overlay the page and require user interaction to
                      dismiss.
                    </p>
                    <Button className="w-full">Confirm</Button>
                  </div>
                </DialogContent>
              </Dialog> */}

              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full bg-transparent">
                    Open Popover
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="space-y-3">
                    <h4 className="font-medium text-sm">Popover Information</h4>
                    <p className="text-sm text-muted-foreground">
                      Popovers appear next to their trigger element with smooth
                      animations.
                    </p>
                    <Button size="sm">Action</Button>
                  </div>
                </PopoverContent>
              </Popover>
            </CardContent>
          </Card>

          {/* Dropdown & Calendar */}
          <Card>
            <CardHeader>
              <CardTitle>Dropdown & Calendar</CardTitle>
              <CardDescription>Menu systems and date pickers</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Dropdown Menu</Label>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-between bg-transparent"
                    >
                      <span>Select an option</span>
                      <Menu className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Create New</DropdownMenuItem>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Duplicate</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="space-y-2">
                <Label>Calendar Picker</Label>
                <div className="flex justify-center">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-2xl"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Accordion */}
          <Card>
            <CardHeader>
              <CardTitle>Accordion</CardTitle>
              <CardDescription>
                Expandable content sections with smooth animations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible defaultValue="item-1">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    What is neumorphic design?
                  </AccordionTrigger>
                  <AccordionContent>
                    Neumorphic design is a style that combines the flat and
                    skeuomorphic design approaches. It creates a soft, unified
                    look by using shadows and highlights to make UI elements
                    appear slightly raised or recessed.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    How do I customize the colors?
                  </AccordionTrigger>
                  <AccordionContent>
                    Colors are defined in the globals.css file using CSS
                    variables. You can easily modify the primary, secondary, and
                    other color tokens to match your brand.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Is it mobile responsive?</AccordionTrigger>
                  <AccordionContent>
                    Yes, all components are built with responsive design in
                    mind. The dashboard shell automatically adapts the sidebar
                    and layout for mobile devices.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Tabs */}
          <Card>
            <CardHeader>
              <CardTitle>Tabs & Toggle Group</CardTitle>
              <CardDescription>
                Organized navigation with tab-based content
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Tabs defaultValue="dashboard" className="w-full">
                <TabsList className="w-full grid grid-cols-3">
                  <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                  <TabsTrigger value="analytics">Analytics</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                <TabsContent value="dashboard" className="space-y-4 pt-4">
                  <p className="text-sm text-muted-foreground">
                    Main dashboard overview and key metrics go here.
                  </p>
                </TabsContent>
                <TabsContent value="analytics" className="space-y-4 pt-4">
                  <p className="text-sm text-muted-foreground">
                    Analytics and detailed reports are displayed here.
                  </p>
                </TabsContent>
                <TabsContent value="settings" className="space-y-4 pt-4">
                  <p className="text-sm text-muted-foreground">
                    Application settings and preferences go here.
                  </p>
                </TabsContent>
              </Tabs>

              <div className="space-y-2 pt-4 border-t border-border">
                <Label>Toggle Group Example</Label>
                <ToggleGroup type="single" defaultValue="align-left">
                  <ToggleGroupItem value="align-left">Left</ToggleGroupItem>
                  <ToggleGroupItem value="align-center">Center</ToggleGroupItem>
                  <ToggleGroupItem value="align-right">Right</ToggleGroupItem>
                </ToggleGroup>
              </div>
            </CardContent>
          </Card>

          {/* Bar Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Bar Chart</CardTitle>
              <CardDescription>
                Sample analytics data displayed in a neumorphic container
              </CardDescription>
            </CardHeader>
            <CardContent className="w-full overflow-x-auto p-2">
              <ChartContainer
                config={{
                  value: { label: "Sales", color: "#ea580c" },
                  value2: { label: "Revenue", color: "#ff7d3f" },
                }}
                className="h-80 min-w-full overflow-x-auto"
              >
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Bar dataKey="value" fill="#ea580c" name="Sales" />
                  <Bar dataKey="value2" fill="#ff7d3f" name="Revenue" />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Line Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Line Chart</CardTitle>
              <CardDescription>
                Trend data with smooth line visualization
              </CardDescription>
            </CardHeader>
            <CardContent className="w-full overflow-x-auto p-2">
              <ChartContainer
                config={{
                  value: { label: "Traffic", color: "#ea580c" },
                  value2: { label: "Conversions", color: "#ff7d3f" },
                }}
                className="h-80 min-w-full overflow-x-auto"
              >
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#ea580c"
                    name="Traffic"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="value2"
                    stroke="#ff7d3f"
                    name="Conversions"
                    strokeWidth={2}
                  />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Pie Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Pie Chart</CardTitle>
              <CardDescription>
                Distribution of product categories
              </CardDescription>
            </CardHeader>
            <CardContent className="w-full overflow-x-auto p-2">
              <ChartContainer
                config={{
                  "Product A": { label: "Product A", color: "#ea580c" },
                  "Product B": { label: "Product B", color: "#ff7d3f" },
                  "Product C": { label: "Product C", color: "#d4d7e8" },
                  "Product D": { label: "Product D", color: "#35354a" },
                }}
                className="h-80 min-w-full overflow-x-auto"
              >
                <PieChart>
                  <Tooltip content={<ChartTooltipContent />} />
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Table */}
          <Card>
            <CardHeader>
              <CardTitle>Data Table</CardTitle>
              <CardDescription>
                Displaying tabular data with neumorphic styling
              </CardDescription>
            </CardHeader>
            <CardContent className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b border-border bg-secondary/30">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold">
                      Product
                    </th>
                    <th className="text-left px-4 py-3 font-semibold">
                      Category
                    </th>
                    <th className="text-left px-4 py-3 font-semibold">Price</th>
                    <th className="text-left px-4 py-3 font-semibold">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border hover:bg-secondary/20 transition-colors">
                    <td className="px-4 py-3">Laptop Pro</td>
                    <td className="px-4 py-3">Electronics</td>
                    <td className="px-4 py-3">$1,299</td>
                    <td className="px-4 py-3">
                      <Badge>In Stock</Badge>
                    </td>
                  </tr>
                  <tr className="border-b border-border hover:bg-secondary/20 transition-colors">
                    <td className="px-4 py-3">Wireless Mouse</td>
                    <td className="px-4 py-3">Accessories</td>
                    <td className="px-4 py-3">$29.99</td>
                    <td className="px-4 py-3">
                      <Badge variant="secondary">Low Stock</Badge>
                    </td>
                  </tr>
                  <tr className="border-b border-border hover:bg-secondary/20 transition-colors">
                    <td className="px-4 py-3">USB Hub</td>
                    <td className="px-4 py-3">Accessories</td>
                    <td className="px-4 py-3">$49.99</td>
                    <td className="px-4 py-3">
                      <Badge>In Stock</Badge>
                    </td>
                  </tr>
                  <tr className="border-b border-border hover:bg-secondary/20 transition-colors">
                    <td className="px-4 py-3">Monitor Stand</td>
                    <td className="px-4 py-3">Furniture</td>
                    <td className="px-4 py-3">$79.99</td>
                    <td className="px-4 py-3">
                      <Badge variant="outline">Out of Stock</Badge>
                    </td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>

          {/* Skeleton Loading */}
          <Card>
            <CardHeader>
              <CardTitle>Skeleton Loaders</CardTitle>
              <CardDescription>
                Placeholder loading states for content
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <Skeleton className="h-12 w-full rounded-xl" />
                <Skeleton className="h-4 w-full rounded-lg" />
                <Skeleton className="h-4 w-3/4 rounded-lg" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <Skeleton className="h-24 w-full rounded-lg" />
                <Skeleton className="h-24 w-full rounded-lg" />
                <Skeleton className="h-24 w-full rounded-lg" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Design Features</CardTitle>
            <CardDescription>
              What makes this neumorphic design system special
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Light Mode
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Soft neutral color palette</li>
                  <li>Subtle outset shadows for depth</li>
                  <li>Inset shadows for recessed inputs</li>
                  <li>Smooth transitions on hover</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Dark Mode
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Darker neutral background</li>
                  <li>Enhanced shadow contrast</li>
                  <li>Inverted light highlights</li>
                  <li>Accent color pop</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-6 leading-relaxed">
              All components automatically adapt to light and dark modes using
              next-themes. The color system uses precise shadow values for
              neumorphic depth and tactile appearance across both themes.
            </p>
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  );
}
