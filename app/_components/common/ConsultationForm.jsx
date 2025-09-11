"use client";
import React, { useState } from "react";
import { FaHandHoldingHeart } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import {
  Phone,
  Mail,
  User,
  MessageSquare,
  Calendar,
  FileText,
  Upload,
  X,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  Scale,
  Shield,
  Heart,
  Gift,
  Users,
  Building,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CharitySupportForm({ isOpen, onClose }) {
  const { t } = useTranslation("common/ConsultationForm");
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    supportType: "",
    message: "",
    donationAmount: "",
    frequency: "",
    volunteerSkills: "",
    availableDays: "",
    sponsorshipType: "",
    companyName: "",
    uploadedFiles: [],
    contactPreference: "",
    consentGiven: false,
    honeypot: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Form options
  const supportTypes = [
    { value: "donation", label: t("supportTypes.donation"), icon: Gift },
    { value: "volunteer", label: t("supportTypes.volunteer"), icon: Users },
    { value: "sponsorship", label: t("supportTypes.sponsorship"), icon: Building },
    { value: "general", label: t("supportTypes.general"), icon: MessageSquare },
  ];

  const donationFrequencies = [
    { value: "one-time", label: t("donation.oneTime") },
    { value: "monthly", label: t("donation.monthly") },
    { value: "quarterly", label: t("donation.quarterly") },
    { value: "annually", label: t("donation.annually") },
  ];

  const volunteerSkillsList = [
    { value: "teaching", label: t("volunteer.teaching") },
    { value: "medical", label: t("volunteer.medical") },
    { value: "construction", label: t("volunteer.construction") },
    { value: "counseling", label: t("volunteer.counseling") },
    { value: "administrative", label: t("volunteer.administrative") },
    { value: "events", label: t("volunteer.events") },
    { value: "fundraising", label: t("volunteer.fundraising") },
    { value: "other", label: t("volunteer.other") },
  ];

  const availableDaysList = [
    { value: "weekdays", label: t("volunteer.weekdays") },
    { value: "weekends", label: t("volunteer.weekends") },
    { value: "both", label: t("volunteer.both") },
    { value: "flexible", label: t("volunteer.flexible") },
  ];

  const sponsorshipTypes = [
    { value: "financial", label: t("sponsorship.financial") },
    { value: "in-kind", label: t("sponsorship.inKind") },
    { value: "event", label: t("sponsorship.event") },
    { value: "partnership", label: t("sponsorship.partnership") },
  ];

  const contactPreferences = [
    { value: "email", label: t("contactMethods.email") },
    { value: "phone", label: t("contactMethods.phone") },
    { value: "whatsapp", label: t("contactMethods.whatsapp") },
    { value: "any", label: t("contactMethods.any") },
  ];

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    // Check honeypot (spam protection)
    if (formData.honeypot) {
      return false;
    }

    if (!formData.fullName.trim()) {
      newErrors.fullName = t("validation.fullNameRequired");
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t("validation.phoneRequired");
    }

    if (!formData.email.trim()) {
      newErrors.email = t("validation.emailRequired");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t("validation.emailInvalid");
    }

    if (!formData.supportType) {
      newErrors.supportType = t("validation.supportTypeRequired");
    }

    if (!formData.message.trim()) {
      newErrors.message = t("validation.messageRequired");
    } else if (formData.message.trim().length < 20) {
      newErrors.message = t("validation.messageTooShort");
    }

    // Additional validation based on support type
    if (formData.supportType === "donation" && !formData.donationAmount) {
      newErrors.donationAmount = t("validation.donationAmountRequired");
    }

    if (formData.supportType === "volunteer" && !formData.volunteerSkills) {
      newErrors.volunteerSkills = t("validation.volunteerSkillsRequired");
    }

    if (formData.supportType === "sponsorship" && !formData.sponsorshipType) {
      newErrors.sponsorshipType = t("validation.sponsorshipTypeRequired");
    }

    if (!formData.contactPreference) {
      newErrors.contactPreference = t("validation.contactPreferenceRequired");
    }

    if (!formData.consentGiven) {
      newErrors.consentGiven = t("validation.consentRequired");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle file upload
  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "image/jpeg",
      "image/png",
      "image/jpg",
    ];

    const validFiles = files.filter((file) => {
      if (!allowedTypes.includes(file.type)) {
        alert(
          `File ${file.name} is not supported. Please upload PDF, Word, or Image files only.`
        );
        return false;
      }
      if (file.size > 10 * 1024 * 1024) {
        // 10MB limit
        alert(
          `File ${file.name} is too large. Please upload files under 10MB.`
        );
        return false;
      }
      return true;
    });

    setFormData((prev) => ({
      ...prev,
      uploadedFiles: [...prev.uploadedFiles, ...validFiles].slice(0, 5), // Max 5 files
    }));
  };

  // Remove uploaded file
  const removeFile = (index) => {
    setFormData((prev) => ({
      ...prev,
      uploadedFiles: prev.uploadedFiles.filter((_, i) => i !== index),
    }));
  };

  // Format message for WhatsApp
  const formatWhatsAppMessage = () => {
    const supportTypeLabel = supportTypes.find(
      (s) => s.value === formData.supportType
    )?.label;

    let specificDetails = "";

    if (formData.supportType === "donation") {
      const frequencyLabel =
        donationFrequencies.find((f) => f.value === formData.frequency)?.label ||
        t("donation.oneTime");
      specificDetails = `💰 ${t("donation.amount")}: ${formData.donationAmount} (${frequencyLabel})`;
    } else if (formData.supportType === "volunteer") {
      const skillsLabel =
        volunteerSkillsList.find((s) => s.value === formData.volunteerSkills)
          ?.label || t("volunteer.other");
      const availabilityLabel =
        availableDaysList.find((d) => d.value === formData.availableDays)
          ?.label || t("volunteer.flexible");
      specificDetails = `🤝 ${t("supportTypes.volunteer")}: ${skillsLabel} • ${t("volunteer.availability")}: ${availabilityLabel}`;
    } else if (formData.supportType === "sponsorship") {
      const sponsorshipLabel =
        sponsorshipTypes.find((s) => s.value === formData.sponsorshipType)
          ?.label || t("sponsorship.financial");
      specificDetails = `🏢 ${t("supportTypes.sponsorship")}: ${sponsorshipLabel}${formData.companyName ? ` ${t("sponsorship.from")} ${formData.companyName}` : ""
        }`;
    }

    const fileNames =
      formData.uploadedFiles.length > 0
        ? formData.uploadedFiles.map((file) => file.name).join(", ")
        : t("whatsapp.noFiles");

    return `❤️ ${t("whatsapp.title")}

👤 ${t("whatsapp.personalInfo")}:
• ${t("fullName")}: ${formData.fullName}
• ${t("phoneNumber")}: ${formData.phone}
• ${t("emailAddress")}: ${formData.email}

🎯 ${t("whatsapp.supportType")}: ${supportTypeLabel}
${specificDetails}

📋 ${t("whatsapp.message")}:
${formData.message}

📞 ${t("whatsapp.preferredContact")}: ${contactPreferences.find((c) => c.value === formData.contactPreference)
        ?.label
      }

📎 ${t("whatsapp.documents")}: ${fileNames}

✅ ${t("whatsapp.consent")}

--
${t("whatsapp.sentVia")}`;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Format details for WhatsApp
      const whatsappMessage = formatWhatsAppMessage();

      // Open WhatsApp with the formatted message
      const whatsappUrl = `https://wa.me/97466164000?text=${encodeURIComponent(
        whatsappMessage
      )}`;
      window.open(whatsappUrl, "_blank");

      setSubmitStatus("success");

      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          supportType: "",
          message: "",
          donationAmount: "",
          frequency: "",
          volunteerSkills: "",
          availableDays: "",
          sponsorshipType: "",
          companyName: "",
          uploadedFiles: [],
          contactPreference: "",
          consentGiven: false,
          honeypot: "",
        });
        setSubmitStatus(null);
        onClose?.();
      }, 2000);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Don't render if modal is not open
  if (!isOpen) return null;

  return (
    <>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap"
        rel="stylesheet"
      />

      {/* Modal Overlay */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4 pt-10 h-screen">
        <div className="bg-[#F2EDE9] rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden relative">
          {/* Modal Header */}
          <div className="bg-gradient-to-r from-[#723134] to-[#543D2E] p-6 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#c0b688]/30 rounded-full blur-xl"></div>

            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <FaHandHoldingHeart className="text-[#F2EDE9] text-3xl" />
                </div>
                <div>
                  <h2
                    className="text-2xl font-bold text-white"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {t("title")}
                  </h2>
                  <p
                    className="text-[#F2EDE9] text-sm"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {t("subtitle")}
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                aria-label="Close form"
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-center transition-colors duration-200"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-100px)]">
            {/* Success/Error Messages */}
            {submitStatus && (
              <div
                className={`mb-6 p-4 rounded-xl border ${submitStatus === "success"
                    ? "bg-green-50 border-green-200 text-green-800"
                    : "bg-red-50 border-red-200 text-red-800"
                  }`}
              >
                <div className="flex items-center space-x-2">
                  {submitStatus === "success" ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <AlertCircle className="w-5 h-5" />
                  )}
                  <span
                    className="font-medium"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {submitStatus === "success"
                      ? t("successMessage")
                      : t("errorMessage")}
                  </span>
                </div>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot for spam protection */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                style={{ display: "none" }}
                tabIndex="-1"
                autoComplete="off"
              />

              {/* Personal Information Section */}
              <div className="bg-white rounded-xl p-6 border border-[#543D2E]/20">
                <h3
                  className="text-lg font-semibold text-[#543D2E] mb-4 flex items-center space-x-2"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  <User className="w-5 h-5 text-[#723134]" />
                  <span>{t("personalInfo")}</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label
                      className="block text-sm font-medium text-[#543D2E] mb-2"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {t("fullName")} *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#543D2E]/60" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={`w-full pl-11 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#723134]/50 focus:border-[#723134] transition-all duration-300 ${errors.fullName
                            ? "border-red-300 bg-red-50"
                            : "border-[#543D2E]/30 hover:border-[#723134]/50"
                          }`}
                        placeholder={t("fullName")}
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      />
                    </div>
                    {errors.fullName && (
                      <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label
                      className="block text-sm font-medium text-[#543D2E] mb-2"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {t("phoneNumber")} *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#543D2E]/60" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full pl-11 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#723134]/50 focus:border-[#723134] transition-all duration-300 ${errors.phone
                            ? "border-red-300 bg-red-50"
                            : "border-[#543D2E]/30 hover:border-[#723134]/50"
                          }`}
                        placeholder="+974 XXXX XXXX"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="md:col-span-2">
                    <label
                      className="block text-sm font-medium text-[#543D2E] mb-2"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {t("emailAddress")} *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#543D2E]/60" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full pl-11 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#723134]/50 focus:border-[#723134] transition-all duration-300 ${errors.email
                            ? "border-red-300 bg-red-50"
                            : "border-[#543D2E]/30 hover:border-[#723134]/50"
                          }`}
                        placeholder={t("emailAddress")}
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Support Type Section */}
              <div className="bg-white rounded-xl p-6 border border-[#543D2E]/20">
                <h3
                  className="text-lg font-semibold text-[#543D2E] mb-4 flex items-center space-x-2"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  <Heart className="w-5 h-5 text-[#723134]" />
                  <span>{t("howToHelp")}</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Support Type */}
                  <div className="md:col-span-2">
                    <label
                      className="block text-sm font-medium text-[#543D2E] mb-2"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {t("iWantTo")} *
                    </label>
                    <select
                      name="supportType"
                      value={formData.supportType}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#723134]/50 focus:border-[#723134] transition-all duration-300 ${errors.supportType
                          ? "border-red-300 bg-red-50"
                          : "border-[#543D2E]/30 hover:border-[#723134]/50"
                        }`}
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      <option value="">{t("iWantTo")}</option>
                      {supportTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                    {errors.supportType && (
                      <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.supportType}</span>
                      </p>
                    )}
                  </div>

                  {/* Conditional fields based on support type */}
                  {formData.supportType === "donation" && (
                    <>
                      <div>
                        <label
                          className="block text-sm font-medium text-[#543D2E] mb-2"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {t("donation.amount")} *
                        </label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#543D2E]/60">
                            QAR
                          </span>
                          <input
                            type="text"
                            name="donationAmount"
                            value={formData.donationAmount}
                            onChange={handleChange}
                            className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#723134]/50 focus:border-[#723134] transition-all duration-300 ${errors.donationAmount
                                ? "border-red-300 bg-red-50"
                                : "border-[#543D2E]/30 hover:border-[#723134]/50"
                              }`}
                            placeholder={t("donation.amount")}
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          />
                        </div>
                        {errors.donationAmount && (
                          <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                            <AlertCircle className="w-4 h-4" />
                            <span>{errors.donationAmount}</span>
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          className="block text-sm font-medium text-[#543D2E] mb-2"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {t("donation.frequency")}
                        </label>
                        <select
                          name="frequency"
                          value={formData.frequency}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-[#543D2E]/30 rounded-xl focus:ring-2 focus:ring-[#723134]/50 focus:border-[#723134] transition-all duration-300"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          <option value="">{t("donation.frequency")}</option>
                          {donationFrequencies.map((freq) => (
                            <option key={freq.value} value={freq.value}>
                              {freq.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </>
                  )}

                  {formData.supportType === "volunteer" && (
                    <>
                      <div>
                        <label
                          className="block text-sm font-medium text-[#543D2E] mb-2"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {t("volunteer.skills")} *
                        </label>
                        <select
                          name="volunteerSkills"
                          value={formData.volunteerSkills}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#723134]/50 focus:border-[#723134] transition-all duration-300 ${errors.volunteerSkills
                              ? "border-red-300 bg-red-50"
                              : "border-[#543D2E]/30 hover:border-[#723134]/50"
                            }`}
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          <option value="">{t("volunteer.skills")}</option>
                          {volunteerSkillsList.map((skill) => (
                            <option key={skill.value} value={skill.value}>
                              {skill.label}
                            </option>
                          ))}
                        </select>
                        {errors.volunteerSkills && (
                          <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                            <AlertCircle className="w-4 h-4" />
                            <span>{errors.volunteerSkills}</span>
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          className="block text-sm font-medium text-[#543D2E] mb-2"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {t("volunteer.availability")}
                        </label>
                        <select
                          name="availableDays"
                          value={formData.availableDays}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-[#543D2E]/30 rounded-xl focus:ring-2 focus:ring-[#723134]/50 focus:border-[#723134] transition-all duration-300"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          <option value="">{t("volunteer.availability")}</option>
                          {availableDaysList.map((day) => (
                            <option key={day.value} value={day.value}>
                              {day.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </>
                  )}

                  {formData.supportType === "sponsorship" && (
                    <>
                      <div>
                        <label
                          className="block text-sm font-medium text-[#543D2E] mb-2"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {t("sponsorship.type")} *
                        </label>
                        <select
                          name="sponsorshipType"
                          value={formData.sponsorshipType}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#723134]/50 focus:border-[#723134] transition-all duration-300 ${errors.sponsorshipType
                              ? "border-red-300 bg-red-50"
                              : "border-[#543D2E]/30 hover:border-[#723134]/50"
                            }`}
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          <option value="">{t("sponsorship.type")}</option>
                          {sponsorshipTypes.map((type) => (
                            <option key={type.value} value={type.value}>
                              {type.label}
                            </option>
                          ))}
                        </select>
                        {errors.sponsorshipType && (
                          <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                            <AlertCircle className="w-4 h-4" />
                            <span>{errors.sponsorshipType}</span>
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          className="block text-sm font-medium text-[#543D2E] mb-2"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {t("sponsorship.companyName")}
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-[#543D2E]/30 rounded-xl focus:ring-2 focus:ring-[#723134]/50 focus:border-[#723134] transition-all duration-300"
                          placeholder={t("sponsorship.companyName")}
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Message Section */}
              <div className="bg-white rounded-xl p-6 border border-[#543D2E]/20">
                <h3
                  className="text-lg font-semibold text-[#543D2E] mb-4 flex items-center space-x-2"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  <AiOutlineInfoCircle className="text-[#723134] text-xl" />
                  <span>{t("yourMessage")}</span>
                </h3>

                {/* Message */}
                <div className="mb-4">
                  <label
                    className="block text-sm font-medium text-[#543D2E] mb-2"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {t("whySupport")} *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#723134]/50 focus:border-[#723134] transition-all duration-300 resize-none ${errors.message
                        ? "border-red-300 bg-red-50"
                        : "border-[#543D2E]/30 hover:border-[#723134]/50"
                      }`}
                    placeholder={t("whySupport")}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* File Upload */}
                <div>
                  <label
                    className="block text-sm font-medium text-[#543D2E] mb-2"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {t("uploadDocuments")}
                  </label>
                  <div className="border-2 border-dashed border-[#543D2E]/30 rounded-xl p-6 text-center hover:border-[#723134]/50 transition-colors duration-300">
                    <Upload className="w-8 h-8 text-[#543D2E]/60 mx-auto mb-2" />
                    <p
                      className="text-sm text-[#543D2E] mb-2"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {t("uploadText")}
                    </p>
                    <p
                      className="text-xs text-[#543D2E]/60 mb-3"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {t("maxSize")}
                    </p>
                    <input
                      type="file"
                      multiple
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="file-upload"
                    />
                    <label
                      htmlFor="file-upload"
                      className="inline-flex items-center px-4 py-2 bg-[#723134]/10 text-[#723134] rounded-lg hover:bg-[#723134]/20 transition-colors duration-200 cursor-pointer"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      {t("chooseFiles")}
                    </label>
                  </div>

                  {/* Display uploaded files */}
                  {formData.uploadedFiles.length > 0 && (
                    <div className="mt-3 space-y-2">
                      {formData.uploadedFiles.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-2 bg-white rounded-lg border border-[#543D2E]/20"
                        >
                          <div className="flex items-center space-x-2">
                            <FileText className="w-4 h-4 text-[#723134]" />
                            <span
                              className="text-sm text-[#543D2E] truncate"
                              style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                              {file.name}
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="text-red-500 hover:text-red-700 transition-colors duration-200"
                            aria-label={`Remove ${file.name}`}
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Contact Preference */}
              <div className="bg-white rounded-xl p-6 border border-[#543D2E]/20">
                <h3
                  className="text-lg font-semibold text-[#543D2E] mb-4 flex items-center space-x-2"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  <Phone className="w-5 h-5 text-[#723134]" />
                  <span>{t("contactPreference")}</span>
                </h3>

                <div>
                  <label
                    className="block text-sm font-medium text-[#543D2E] mb-2"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {t("contactMethod")} *
                  </label>
                  <select
                    name="contactPreference"
                    value={formData.contactPreference}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#723134]/50 focus:border-[#723134] transition-all duration-300 ${errors.contactPreference
                        ? "border-red-300 bg-red-50"
                        : "border-[#543D2E]/30 hover:border-[#723134]/50"
                      }`}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <option value="">{t("contactMethod")}</option>
                    {contactPreferences.map((pref) => (
                      <option key={pref.value} value={pref.value}>
                        {pref.label}
                      </option>
                    ))}
                  </select>
                  {errors.contactPreference && (
                    <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.contactPreference}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Consent Section */}
              <div className="bg-[#723134]/5 border border-[#723134]/20 rounded-xl p-6">
                <h3
                  className="text-lg font-semibold text-[#543D2E] mb-4 flex items-center space-x-2"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  <Shield className="w-5 h-5 text-[#723134]" />
                  <span>{t("consentAgreement")}</span>
                </h3>

                <div className="flex items-start space-x-3">
                  <input
                    id="consentGiven"
                    type="checkbox"
                    name="consentGiven"
                    checked={formData.consentGiven}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 text-[#723134] bg-gray-100 border-gray-300 rounded focus:ring-[#723134]/50 focus:ring-2"
                  />
                  <div>
                    <label htmlFor="consentGiven" className="sr-only">
                      {t("consentAgreement")}
                    </label>
                    <p
                      className="text-sm text-[#543D2E]"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {t("consentText")}
                    </p>
                    {errors.consentGiven && (
                      <p className="mt-2 text-sm text-red-600 flex items-center space-x-1">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.consentGiven}</span>
                      </p>
                    )}
                    <p className="mt-3 text-xs text-[#543D2E]/70 flex items-center gap-1">
                      <Scale className="w-4 h-4" />
                      {t("confidentiality")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <p className="text-xs text-[#543D2E]/70 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {t("responseTime")}
                </p>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={onClose}
                    className="w-full sm:w-auto inline-flex gap-2 items-center justify-center px-5 py-3 rounded-xl border border-[#723134]/30 text-[#723134] bg-white hover:bg-[#723134]/5 transition"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <X className="w-4 h-4" />
                    {t("cancel")}
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full sm:w-auto inline-flex gap-2 items-center justify-center px-5 py-3 rounded-xl text-white transition ${isSubmitting
                        ? "bg-[#723134]/70 cursor-not-allowed"
                        : "bg-[#723134] hover:bg-[#5d272a]"
                      }`}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        {t("sending")}
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        {t("submit")}
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}