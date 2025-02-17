
import { Card } from '@/components/ui/card';

export const FeatureCard = ({ icon: Icon, title, description, stats }) => (
    <Card className="bg-zinc-800/50 border-zinc-700 p-6">
      <div className="flex items-start gap-4">
        <div className="p-2 bg-indigo-600/20 rounded-lg">
          <Icon className="w-6 h-6 text-indigo-400" />
        </div>
        <div>
          <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
          <p className="text-zinc-400 mb-4">{description}</p>
          <div className="text-zinc-300 font-medium">{stats}</div>
        </div>
      </div>
    </Card>
  );
  