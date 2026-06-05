import {
  FolderGit2,
  Heart,
  Briefcase,
  Award,
  Smartphone,
  Monitor,
  Layers,
  Search,
  Compass,
  Palette,
  Cpu,
  CheckCircle,
  ExternalLink,
  Mail,
  Linkedin,
  Github,
  Award as AwardIcon,
  Send,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  Star,
  Menu,
  X,
  Check,
  Zap,
  Flame,
  Figma,
  Dribbble,
  Sparkles,
  Layout,
  Code,
  Instagram,
  Facebook
} from "lucide-react";

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function IconRenderer({ name, className = "", size = 24 }: IconProps) {
  switch (name) {
    case "FolderGit2":
      return <FolderGit2 className={className} size={size} />;
    case "Heart":
      return <Heart className={className} size={size} />;
    case "Briefcase":
      return <Briefcase className={className} size={size} />;
    case "Award":
      return <Award className={className} size={size} />;
    case "Smartphone":
      return <Smartphone className={className} size={size} />;
    case "Monitor":
      return <Monitor className={className} size={size} />;
    case "Layers":
      return <Layers className={className} size={size} />;
    case "Search":
      return <Search className={className} size={size} />;
    case "Compass":
      return <Compass className={className} size={size} />;
    case "Palette":
      return <Palette className={className} size={size} />;
    case "Cpu":
      return <Cpu className={className} size={size} />;
    case "CheckCircle":
      return <CheckCircle className={className} size={size} />;
    case "ExternalLink":
      return <ExternalLink className={className} size={size} />;
    case "Mail":
      return <Mail className={className} size={size} />;
    case "Linkedin":
      return <Linkedin className={className} size={size} />;
    case "Github":
      return <Github className={className} size={size} />;
    case "Send":
      return <Send className={className} size={size} />;
    case "ArrowRight":
      return <ArrowRight className={className} size={size} />;
    case "ArrowLeft":
      return <ArrowLeft className={className} size={size} />;
    case "ChevronRight":
      return <ChevronRight className={className} size={size} />;
    case "ChevronLeft":
      return <ChevronLeft className={className} size={size} />;
    case "Star":
      return <Star className={className} size={size} />;
    case "Menu":
      return <Menu className={className} size={size} />;
    case "X":
      return <X className={className} size={size} />;
    case "Check":
      return <Check className={className} size={size} />;
    case "Zap":
      return <Zap className={className} size={size} />;
    case "Flame":
      return <Flame className={className} size={size} />;
    case "Figma":
      return <Figma className={className} size={size} />;
    case "Dribbble":
      return <Dribbble className={className} size={size} />;
    case "Sparkles":
      return <Sparkles className={className} size={size} />;
    case "Layout":
      return <Layout className={className} size={size} />;
    case "Code":
      return <Code className={className} size={size} />;
    case "Instagram":
      return <Instagram className={className} size={size} />;
    case "Facebook":
      return <Facebook className={className} size={size} />;
    default:
      return <Sparkles className={className} size={size} />;
  }
}
