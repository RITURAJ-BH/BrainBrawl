import React, { useState } from 'react'
 
import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
  } from "@/components/ui/command"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
const CustomQuizSec = () => {
    const [num, setNum] = useState(10);

    const handleCreditChange = (value) => {
        const numericValue = Number(value);
            setNum(numericValue);
        
    };
  return (
    <div>
<Card className="w-[400px] bg-white dark:bg-[#0d0d0d] text-black dark:text-white">
      <CardHeader>
        <CardTitle>Any Category of Your Choice🤗</CardTitle>
        <CardDescription>Just Describe us about the Category we will create for you🤖</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
                <Label htmlFor="Number">Number of Questions</Label>
                <Input
                        type="range"
                        min="10"
                        max="20"
                        value={num}
                        onChange={(e) => handleCreditChange(e.target.value)}
                        className="w-full accent-blue"
                    />
                    <Input
                        type="number"
                        min="10"
                        max="20"
                        value={num}
                        onChange={(e) => handleCreditChange(e.target.value)}
                        className="w-full p-2 border rounded-md mt-2"
                    />
            <Label htmlFor="category">Category</Label>
<Input placeholder="Describe about your Category😎"/>
            </div>
            <div>
                <Label className="mb-2">Choose Difficulty</Label>
                <RadioGroup defaultValue="option-one" className="flex flex-row items-center justify-between">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Easy</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Medium</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-three" id="option-three" />
    <Label htmlFor="option-three">Hard</Label>
  </div>
</RadioGroup>

            </div>
            <div>
            <Label className="mb-2">Type</Label>
                <RadioGroup defaultValue="option-one" className="flex flex-row items-center justify-evenly">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">MCQ</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">True/False</Label>
  </div>
</RadioGroup>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="w-full hover:cursor-pointer">Start Quiz</Button>
      </CardFooter>
    </Card>

    </div>
  )
}

export default CustomQuizSec
