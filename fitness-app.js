import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const FitnessApp = () => {
  const [weight, setWeight] = useState("");
  const [waist, setWaist] = useState("");
  const [progress, setProgress] = useState([]);

  const handleSubmit = () => {
    setProgress([...progress, { weight, waist, date: new Date().toLocaleDateString() }]);
    setWeight("");
    setWaist("");
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Fitness & Nutrition Tracker</h1>
      
      {/* Log Progress */}
      <Card>
        <CardContent>
          <h2 className="text-lg font-semibold mb-2">Log Your Progress</h2>
          <Input
            type="number"
            placeholder="Enter weight (lbs)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="mb-2"
          />
          <Input
            type="number"
            placeholder="Enter waist size (inches)"
            value={waist}
            onChange={(e) => setWaist(e.target.value)}
            className="mb-2"
          />
          <Button onClick={handleSubmit} className="w-full">Submit</Button>
        </CardContent>
      </Card>
      
      {/* Progress History */}
      <h2 className="text-lg font-semibold mt-4">Progress History</h2>
      {progress.length > 0 ? (
        <ul className="mt-2">
          {progress.map((entry, index) => (
            <li key={index} className="border p-2 mt-1 rounded">
              {entry.date}: {entry.weight} lbs, {entry.waist}" waist
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No progress logged yet.</p>
      )}
      
      {/* Workout Plan */}
      <h2 className="text-lg font-semibold mt-4">Workout Plan</h2>
      <p className="text-gray-600">Follow your structured workout routine daily.</p>
      
      {/* Nutrition Plan */}
      <h2 className="text-lg font-semibold mt-4">Nutrition Plan</h2>
      <p className="text-gray-600">Stick to your Keto/Mediterranean meal plan.</p>
      
      {/* Reminders & Weekly Goals */}
      <h2 className="text-lg font-semibold mt-4">Weekly Goals & Reminders</h2>
      <p className="text-gray-600">Ensure consistent tracking, workouts, and meal adherence.</p>
    </div>
  );
};

export default FitnessApp;
